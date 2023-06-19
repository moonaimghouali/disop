export const validateLoginForm = (email) =>{
    if(email.trim().length < 14 && email.trim().slice(-13,email.trim().length) !== "@sonatrach.dz" ){

        return {error:true, errorMessage:"Veuillez saisir une adresse mail valide de sonantrach (@sonatrach.dz)."}
    }else{
        return {error:false, errorMessage:""}
    }
}

export const validateCommentaireForm = (titre, contenu) =>{

    if(titre.trim().length < 4) {
        return {error:true, errorMessage:"Veuillez inserer un titre pour votre commentaire."}
    }else {
        if(contenu.trim().length < 20) {
            return {error:true, errorMessage:"Veuillez inserer un contenu detaille pour votre commentaire (20 caracteres)."}
        }else{
            return {error:false, errorMessage:""}
        }
    }
}

export const validateMouvementForm = (fv, op) =>{
    if (op !== "StockFinal") {
        if ((fv.initiale_densite <0.5) || (fv.initiale_densite > 0.6 && fv.initiale_densite < 0.690) || (fv.initiale_densite > 0.87)) {
            return {error:true, errorMessage:"Veuillez verifier la valeur de la densite initiale."} 
        }
        
        if ((fv.initiale_temperature <0) || (fv.initiale_temperature > 75 ) ) {
            return {error:true, errorMessage:"Veuillez verifier la valeur de la temperature initiale."} 
        }
    }

    if ((fv.finale_densite <0.5) || (fv.finale_densite > 0.6 && fv.finale_densite < 0.690) || (fv.finale_densite > 0.87)) {
        return {error:true, errorMessage:"Veuillez verifier la valeur de la densite finale."} 
    }
    if ((fv.finale_temperature <0) || (fv.finale_temperature > 75 ) ) {
        return {error:true, errorMessage:"Veuillez verifier la valeur de la temperature initiale."} 
    }

    return {error:false, errorMessage:""}
}

export const validateNouveauBacForm = (formValues) =>{
    return {error:false, errorMessage:""}
    
}