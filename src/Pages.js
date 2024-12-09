import React from 'react'
import TextInputForm from "./Component/ui/TextInputForm";
import { TextTrasnlatorButtons, TranslateActionButton } from "./Component/ui/TranslateActionButton";
import ManageDataHistory from "./Component/ui/ManageDataHistory";

function page() {
    return (
        <>
            <TextInputForm />
            <TextTrasnlatorButtons />
            <ManageDataHistory />
        </>
    )
}

export default page