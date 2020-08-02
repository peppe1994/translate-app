import {GOOGLE_TRANSLATE_ENDPOINT, IID, QUERYPARAMS, CONTENT_TYPE_URLENCODED} from './constant';

export async const Translate = (source, sourceLang, targetLang) => {

    const response = await fetch(GOOGLE_TRANSLATE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': CONTENT_TYPE_URLENCODED
              }
        });

    return response.json(); // parses JSON response into native JavaScript objects
}