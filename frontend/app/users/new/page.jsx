"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { redirect } from "next/navigation"

const AddNewUsers = () => {
  const handleAddNewUser = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)

    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    console.log("response from server", res)
    const afterSubmit = await res.json()
    console.log("afterSubmit", afterSubmit)
    if (afterSubmit.insertedId) {
      console.log("User added Successfully")
      redirect("/users")
    }
  }
  return (
    <form action="" onSubmit={handleAddNewUser}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" name="name" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
            name="email"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Add User</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default AddNewUsers
