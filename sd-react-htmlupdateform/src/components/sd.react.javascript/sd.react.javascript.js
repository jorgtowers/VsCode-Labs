import React from 'react';
import css from './sd.react.javascript.css';

export const _ = (function () {
    return {
        /**
         * get an object or collections for a selector
         * @param selector Describe selector for JS
         * @param firstElement Return only first element whether is true value
         */
        fn: function (selector, firstElement) {
            var items = document.querySelectorAll(selector);
            if (typeof (firstElement) === "undefined") {
                var item = items[0];
                if (item != undefined) {
                    item.Hide = function () { this.style.display = "none"; };
                    item.Show = function () { this.style.display = "block"; };
                    item.Clear = function () { this.innerHTML = "" };
                    item.Enabled = function () { this.setAttribute("disabled", "true"); };
                    item.Disabled = function () { this.removeAttribute("disabled"); };
                    item.ModalClose = function () { this.parentElement.style.display = "none"; }
                    item.ModalOpen = function () { this.parentElement.style.display = "block"; }
                }
                return item;

            }
            else
                return [].constructor.from(items);
        },
        /**
         * valid if object is null then return object otherwise return ifnull value
         * @param object Describe selector for JS
         * @param ifnull Return only first element whether is true value
         */
        in: function (object, ifnull) {
            if (object === null || object === undefined || (object.Type == "Array" && object.length == 0))
                return ifnull;
            return object;
        },
        /**
         * return an object or collection with event and callback programmed
         * @param selector Describe selector for JS
         * @param allItems apply for all elementos of collection
         * @param event event for apply code
         * @param callback function for event
         */
        on: function (selector, allItems, event, callback) {
            var items;
            if (selector.Type === "String")
                items = document.querySelectorAll(selector);
            else
                items = selector;
            if (allItems === null || allItems === false) {
                var item = (selector.Type === "String" ? items.SD.ToArray().SD.First() : selector);
                if (item != undefined) {
                    item.addEventListener(event, callback);
                    item.Hide = function () { this.style.display = "none"; };
                    item.Show = function () { this.style.display = "block"; };
                    item.Enabled = function () { this.setAttribute("disabled", "true"); };
                    item.Disabled = function () { this.removeAttribute("disabled"); };
                    item.ModalClose = function () { this.parentElement.style.display = "none"; }
                    item.ModalOpen = function () { this.parentElement.style.display = "block"; }
                }
                return (selector.Type == "String" ? items.SD.ToArray().SD.First() : selector.id);
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item != undefined) {
                        item.addEventListener(event, callback);
                        item.Hide = function () { this.style.display = "none"; };
                        item.Show = function () { this.style.display = "block"; };
                        item.Enabled = function () { this.setAttribute("disabled", "true"); };
                        item.Disabled = function () { this.removeAttribute("disabled"); };
                        item.ModalClose = function () { this.parentElement.style.display = "none"; }
                        item.ModalOpen = function () { this.parentElement.style.display = "block"; }
                    }
                }
                return (selector.Type == "String" ? items.SD.ToArray() : selector.id);
            }
        },
        /**
        * valid if object is null then return object otherwise return ifnull value
        * @param tagName Describe selector for JS
        * @param type Return only first element whether is true value
        * @param id Return only first element whether is true value
        * @param title Return only first element whether is true value
        * @param classList Return only first element whether is true value
        */
        ce: function (tagName, type, id, title, classList) {
            var o = document.createElement(tagName);
            if (id != null)
                o.id = id;
            if (type != null)
                o.type = type;
            if (classList != undefined)
                o.className = classList;
            if (title != undefined)
                o.title = title;
            o.Hide = function () { this.style.display = "none"; };
            o.Show = function () { this.style.display = "block"; };
            o.Enabled = function () { this.setAttribute("disabled", "true"); };
            o.Disabled = function () { this.removeAttribute("disabled"); };
            o.Clear = function () { this.innerHTML = ""; }
            o.ModalClose = function () { this.parentElement.style.display = "none"; }
            o.ModalOpen = function () { this.parentElement.style.display = "block"; }
            return o;
        },
        ne: ({ tag, type, id, title, cssClass, innerHTML, placeHolder, withEvents } = {}) => {
            var o = document.createElement(tag);
            if (id != null)
                o.id = id;
            if (type != null)
                o.type = type;
            if (cssClass != undefined)
                o.className = cssClass;
            if (placeHolder != undefined)
                o.placeholder = placeHolder;
            if (title != undefined)
                o.title = title;
            if (innerHTML != undefined)
                o.innerHTML = innerHTML;
            if (withEvents != null) {
                o.Hide = function () { this.style.display = "none"; };
                o.Show = function () { this.style.display = "block"; };
                o.Enabled = function () { this.setAttribute("disabled", "true"); };
                o.Disabled = function () { this.removeAttribute("disabled"); };
                o.Clear = function () { this.innerHTML = ""; }

                o.ModalClose = function () { this.parentElement.style.display = "none"; }
                o.ModalOpen = function () { this.parentElement.style.display = "block"; }


            }
            return o;
        },
        cl: (message, color) => {

            color = color || "black";

            switch (color) {
                case "success":
                    color = "Green";
                    break;
                case "info":
                    color = "DodgerBlue";
                    break;
                case "error":
                    color = "Red";
                    break;
                case "warning":
                    color = "Orange";
                    break;
                default:
                    color = color;
            }
            if (message.Type != "String") {
                console.log("%c SD.Javascript => " + message.message, "color: red; padding: .5em; background: #dfeffc; ");
                console.log("%c SD.Javascript => " + message.stack, "color: DodgerBlue; padding: .5em; background: #dfeffc; ");
            } else
                console.log("%c SD.Javascript => " + message, "color: " + color + "; padding: .5em; background: #dfeffc; ");
        }
    };
})();

export class SD extends React.Component {
 constructor(){
     super();
     this._version='v3.4.3';
 }

 get Version(){
     return this._version;
 }    
 
 render(){
     return (this.props.children)
 } 
}

export const HTMLBasic = (props) => {
    
    let tHead = ()=>{
        let data = props.model!=undefined && props.model.constructor.name =="Array"?props.model[0]:[];
        const nameOfCols = Object.keys(data);
        if(nameOfCols.length>0){
            return (
                <thead><tr>{ 
                    nameOfCols.map(col=>(<th>{col}</th>))
                    }</tr></thead>
            )
        }  else {
            return (<thead><tr><th>No data found</th></tr></thead>)
        } 
        
    }
    let tBody = ()=>{
        return (
            <tbody>{ props.model.map((val,index)=> {
                   return (                    
                    <tr>
                        { Object.values(val).map(x=>(<td>{x}</td>))}
                    </tr>                
                   )
                })
            }</tbody>
        );
    }

    
        return (
        <table className='sdTable'>
        { tHead()}
        { tBody()}
        </table>)
    
}

export class HTMLUpdateForm extends SD {
    constructor(){
        super();
        console.log('[sd.javascript.js] HTMLUpdateForm')
    }

    state ={
       model:{}
    }
    checkRequireds = ()=>{
        let canUpdate=false;
        let requeridsFields =_.fn('#' + this.props.id+" input[required]",true);
         if(requeridsFields.length>0){
             requeridsFields.forEach(field=>{
                 if(field.value.length==0){
                     field.className = css.sdRequiredField;
                     canUpdate=false;
                 } else {
                     canUpdate=true;
                     field.className="";                
                 }
                     
             });
         } else
            canUpdate=true;
         return canUpdate;
    }
    saveHandler =(e)=>{
        e.preventDefault();
        
        if(this.checkRequireds())
        {
            this.props.onSaved(this.state.model);
        }
        

    }
    clearModelOnState=()=>{
        const nameOfCols = Object.keys(this.props.model);     
        let o={};
        nameOfCols.forEach(prop=>{
            o[prop]=''
        });
        this.setState({
            model:o
        });
    }
    clearHandler =(e)=>{
        _.fn('#' + this.props.id +" input",false).forEach(input=>{
             input.value='';
         });
         this.clearModelOnState();
         this.checkRequireds();
    }
    propertyBlurHandler=(e)=>{
        let col =e.target.id.replace('txt','');
        let tModel = this.state.model;
        let val =e.target.value;
        let fixed =(val.length > 0 ? !isNaN(val) ? Number.parseFloat(val) : (this.props.upperCase ? val.toUpperCase() : val) : '');
        tModel[col]=fixed;
        this.setState({
            model:tModel
        });
        e.target.value= fixed;
    }
    componentWillMount(){
        this.clearModelOnState();
    }

    hiddenFields =(col)=>{
       if( this.props.hidden!=undefined && this.props.hidden.split(',').find(x=>x==col)!=undefined )
        return ({display:'none'});
        else 
        return ({});
    }
    requiredLabel=(col)=>{
        if( this.props.required!=undefined && this.props.required.split(',').find(x=>x==col)!=undefined )
        return (<small>** Required</small>)
    }
    helpLabel=(col)=>{
        let helps=this.props.help!=undefined ? this.props.help.split(','):[];
        let help =helps.find(x=>x.indexOf(col)>-1);
        if( help!=undefined )
            return (<small>{help.split(':')[1]}</small>)
        else
        return (<small>{}</small>) 
    }
    typeField=(col)=>{
        let types=this.props.types!=undefined ? this.props.types.split(','):[];
        let type =types.find(x=>x.indexOf(col)>-1);
        if( type!=undefined )
            return (type.split(':')[1])
        else
            return ('text') 

    }


    render (){
        const nameOfCols = Object.keys(this.props.model);     
        return (
        <SD>
            <table id={this.props.id} className='sdMasterFormFields'>
            <thead>
                <tr>
                    <th colSpan={nameOfCols.length}>{this.props.title?.toUpperCase()??'HTMLUpdateForm by SD.React.Javascript'}</th>
                </tr>
            </thead>
            <tbody>
                {nameOfCols.map((col,index)=>{
                    return (<tr style={this.hiddenFields(col)}>
                                <td><span>{col}</span><br/>{this.helpLabel(col)}</td>
                                <td>
                                <input 
                                    id={`txt${col}`} 
                                    type= { this.typeField(col)}
                                    placeholder={col}
                                    onBlur={this.propertyBlurHandler}
                                    required = {  this.props.required!=undefined?this.props.required.split(',').find(x=>x==col)!=undefined ? 'required': '':''}
                                    ></input>
                                    {this.requiredLabel(col)}
                                </td>
                            </tr>
                           )
                })}
                </tbody>
                <tfoot>
                <tr>
                    <th colSpan="2">
                    <button onClick={this.saveHandler}>{this.props.saveButton??'Save'}</button>
                        <button onClick={this.clearHandler}>{this.props.cancelButton??'Cancel'}</button>
                    </th>
                </tr>
                </tfoot>
            </table>
        </SD>)
    }
}


export default {
    _,
    SD,
    HTMLUpdateForm,
    HTMLBasic
   
}