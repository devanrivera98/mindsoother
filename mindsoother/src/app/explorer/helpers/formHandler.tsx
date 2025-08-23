import { FormEvent } from "react"
import { searchRequest } from "../searchRequest";

interface formHandlerInterface {
setIsLoading: (loading: boolean) => void;
setData: (data: object) => void;
textValue : string;
}

export default async function formHandler(e: FormEvent, {setIsLoading, setData, textValue} : formHandlerInterface) {
    e.preventDefault()
    setIsLoading(true)
    const results = await searchRequest(textValue)

    if (results) {
        setIsLoading(false)
        setData(results)
    }

    return results

  }