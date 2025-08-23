import { FormEvent } from "react"
import { searchRequest } from "../searchRequest";

interface formHandlerInterface {
setIsLoading: (loading: boolean) => void;
setData: (data: object | null) => void;
setTextValue: (text: string) => void;
textValue : string;
}

export default async function formHandler(e: FormEvent, {setIsLoading, setData, setTextValue, textValue} : formHandlerInterface) {
    e.preventDefault()
    setIsLoading(true)
    setData(null)

    const results = await searchRequest(textValue)

    if (results) {
        setIsLoading(false)
        setData(results)
        setTextValue("")
    }

    return results

  }