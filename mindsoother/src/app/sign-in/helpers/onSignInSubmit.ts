import { FormEvent } from "react";

export default async function onSignUpSubmit(signInForm: any) {

    try {

        const response = await fetch('/api/signIn', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(signInForm)
        }) 
    
        if (!response.ok) {
            throw new Error(`response status ${response.status}`)
        }
    } 
    catch (err) {
        console.error(err)
    }
}