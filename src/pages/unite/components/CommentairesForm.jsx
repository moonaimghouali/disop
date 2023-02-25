import React from 'react'
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar   } from '@syncfusion/ej2-react-richtexteditor'


const CommentairesForm = () => {
    // toolbar settings
    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontSize', 
            'LowerCase', 'UpperCase', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'ClearFormat', 'Print','SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
        ],
        type: 'Expand'
    };

    var rteObject = null
    //handle Submit event
    const handleSubmit = (e) =>{
        e.preventDefault()
        e.target.titre.value = ""  
        const rteValue = rteObject.getHtml()    
        alert(rteValue)
    }

  return (
    <div className='h-full w-6/12 flex flex-col p-4 bg-white rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Ajouter un Commentaire</div>
        <form className='flex flex-col h-full mt-4' method='POST' onSubmit={handleSubmit}>

            {/* titre */}
            <label>Titre</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1" type="text" id="titre" name='titre' placeholder='titre du commentaire'/>
            
            {/* contenu
            <label className='mt-4'>Contenu</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 flex-1 p-1 align-text-top align-top" type="text" id="detail" name='detail' placeholder='Contenu de commentaire'/> */}

            {/* texteditor */}
            <label className='mt-4 mb-1'>Contenu</label>
            <div className='flex-1 px-2'>
              <RichTextEditorComponent height={250} toolbarSettings={toolbarSettings}
              ref={(richTextEditor) => {rteObject = richTextEditor}}>
              <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
              </RichTextEditorComponent>
            </div>
            

            <div className='flex w-full items-center justify-center mt-4'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
              Envoyer</button>
            </div>

        </form>
    </div>
  )
}

export default CommentairesForm