import axios from 'axios';
import React, { useState } from 'react'
import languages from './languages';

const TextForm = (props) => {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');
    const [loading, setLoading] = useState(false);
    let [likeCount, setLikeCount] = useState(1002);
    let [dislike, setDisLike] = useState(227);

    const handleExchangeLangArrow = () => {
        let tempValue = fromText;
        setFromText(toText);
        setToText(tempValue);

        let tempLang = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(tempLang);
    }

    //input data fetch and get data 
    const handleChange = (event) => {
        setFromText(event.target.value);
    }
    
    //convert the text to upperCase 
    const handleUpperCase = () => {
        const UpedateText = fromText.toUpperCase();
        setFromText(UpedateText);
        props.showAlert("Converted to Uppercase...!", "Success");
        props.titleShow("toUpperCase Transfer");
    }

    //convert the text in lowerCase 
    const handleLowerCase = () => {
        const UpedateText = fromText.toLowerCase();
        setFromText(UpedateText);
        props.showAlert("Converted to LowerCase...!", "Success");
        props.titleShow("toLowerCase Transfer");
    }

    //inpute in clear text data
    const handleClearText = () => {
        setFromText("");
        props.showAlert("Your Text Cleared...!", "Success");
        props.titleShow("Your text cleared");
    }

    const copyContent = (text) => {
        navigator.clipboard.writeText(text);
    }

    // voice speech handler code
    const utterText = (text, languages) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterText.lang = languages;
        synth.speak(utterance);
    }

    const handleIconClick = (target, id) => {
        if (target.classList.contains('fa-copy')) {
            if (id == 'from') {
                copyContent(fromText);
            }
            else {
                copyContent(toText);
            }
        }
        else {
            if (id == 'from') {
                utterText(fromText, fromLanguage);
            }
            else {
                utterText(toText, toLanguage);
            }
        }
    }
    //remove extra space
    const handleExtraSpace = () => {
        const UpedateText = fromText.split(/[ ]+/);
        setFromText(UpedateText.join(" "));
        props.showAlert("Extra Spaces Removed...!", "Success");
        props.titleShow("Extra space removed");
    }

    //like button handler 

    const handleLikeBtn = () => {
        let like = document.getElementById('like');
        let likeBtnResponse = prompt("Please Enter Your Email Id");
        if (likeBtnResponse) {
            like.style.color = 'blue'
            setLikeCount(likeCount = likeCount + 1);
        }
    }

    //dislike button handler
    const handleDislikeBtn = () => {
        document.getElementById('unlike').style.color = 'red';
        setDisLike(dislike = dislike - 1)
    }

    //translate language api handler code
    const handleTranslate = () => {
        setLoading(true);
        let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setToText(data.responseData.translatedText);
                setLoading(false)
            })
    }

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <div className="input-output-translate-area">
                    <div className='box-1'>
                        <select name="" id="translate-lang-box" style={{ backgroundColor: props.mode === 'dark' ? '#393332' : '#fff', color: props.mode === 'dark' ? 'white' : 'black' }} value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}>
                            {
                                Object.entries(languages).map(([code, name]) => (
                                    <option key={code} value={code}>{name}</option>
                                ))
                            }
                        </select>
                        <div id="myBox">
                            <textarea placeholder='Enter Text her..' className="form-control mb-4" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#393332' : '#fff', color: props.mode === 'dark' ? 'white' : 'black' }} value={fromText} onChange={(e) => setFromText(e.target.value)}></textarea>
                            <i className="fa-solid fa-volume-high speaker" onClick={(e) => handleIconClick(e.target, 'from')}></i>
                            <i id='from' className="fa-regular fa-copy copy" onClick={(e) => handleIconClick(e.target, 'from')}></i>
                        </div>
                    </div>
                    <div className='flex-box'>
                        <i className="fa-solid fa-arrow-right-arrow-left translate-arrow" onClick={handleExchangeLangArrow}></i>
                        <div className="translater-btn small-device-btn"><button className='translate' onClick={handleTranslate}>{loading ? 'Translating...' : "Translate Text"}</button></div>
                    </div>
                    <div className='box-2'>
                        <select name="" id="translate-lang-box" style={{ backgroundColor: props.mode === 'dark' ? '#393332' : '#fff', color: props.mode === 'dark' ? 'white' : 'black' }} value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
                            {
                                Object.entries(languages).map(([code, name]) => (
                                    <option key={code} value={code}>{name}</option>
                                ))
                            }
                        </select>
                        <div id="myBox">
                            <textarea placeholder='Translate' className="form-control mb-4 translate-box" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#393332' : '#fafafa', color: props.mode === 'dark' ? 'white' : 'black' }} value={toText}></textarea>
                            <i className="fa-solid fa-volume-high speaker" onClick={(e) => handleIconClick(e.target, 'to')}></i>
                            <div className="translate-box-handler">
                                <i id='to' className="fa-regular fa-copy" onClick={(e) => handleIconClick(e.target, 'to')}></i>
                                <i className="fa-solid fa-share-nodes"></i>
                                <label htmlFor="">
                                    <i id='like' className="fa-regular fa-thumbs-up like-btn" onClick={handleLikeBtn}></i>
                                    <span className='mx-1 blue-count-wrapper'>+{likeCount}</span>
                                </label>
                                <label htmlFor="">
                                    <i id='unlike' className="fa-regular fa-thumbs-down unlike-btn" onClick={handleDislikeBtn}></i>
                                    <span className='mx-1 red-count-wrapper'>-{dislike}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="translater-btn big-device-btn"><button className='translate mb-4' onClick={handleTranslate}>{loading ? 'Translating...' : "Translate Text"}</button></div>
                <div className="btn-box">
                    <button disabled={fromText.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpperCase}>Convert To Uppercase</button>
                    <button disabled={fromText.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowerCase}>Convert To Lowercase</button>
                    <button disabled={fromText.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                    <button disabled={fromText.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container">
                <h3>Your Text Summury..</h3>
                <p className='word-char-counting-tag'>{fromText.split(" ").filter((element) => { return element.length !== 0 }).length} word and {fromText.length}/5000 Character</p>
                <h4 className='preview-headline'>Preview Document..</h4>
                <p className='preview-area'>{fromText.length > 0 ? fromText : 'Enter something in the textbox above to preview it her..'}</p>
            </div>
        </div>
    )
}

export default TextForm;