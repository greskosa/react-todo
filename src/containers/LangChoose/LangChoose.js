import React from 'react';
import {LanguageContext, langs} from '../../context/l18n';
import './LangChoose.css'

export default class LangChoose extends  React.Component{
    state = {
        currentLang: "en",
        langPack: langs["en"]
    };
    changeLanguage(event){
        let currentLang = event.target.value;

        this.setState({
            currentLang: currentLang ,
            langPack: langs[currentLang]
        }, function () {
            console.log(this.state)
        });
    }
    render(){
        let language = this.context;
        return (
                    <div className="nav-language-choose">
                        <div>{language.chooseLanguage}</div>
                        <LanguageContext.Provider value={this.state}>
                        <select onChange={this.changeLanguage.bind(this)} value={this.state.currentLang}>
                            {
                                Object.keys(langs).map((langKey)=>
                                        <option value={langKey} key={langKey}>{langKey}</option>
                                )
                            }
                        </select>
                        </LanguageContext.Provider>
                    </div>

                )
    }

}
LangChoose.contextType = LanguageContext;

