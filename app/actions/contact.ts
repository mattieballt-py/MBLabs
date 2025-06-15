"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://taevzmilfbtdbyjlegwh.supabase.co"
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function submitContactForm(formData: FormData) {
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    const { data, error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Failed to send message. Please try again." }
    }

    return { success: true, message: "Message sent successfully! We'll get back to you soon." }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
