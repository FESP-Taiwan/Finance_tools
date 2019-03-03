import React, {Component} from 'react';
import './plan.css'
 
class Plan extends Component {
    constructor(props){
        super(props)
        this.state= {
            assetNowPrincipal: '',
            assetNowDeposit: '',
            workStarted: '',
            Year: '',
            earns: '',
            mCost: '',
        }
            
        // this.handleChange = this.handleChange.bind(this)

    }

    handleInputChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleKeyup = (event) => {
        let {name, value} = event.target
        value = value.replace(/[^\d]/g,'')
        this.setState({
            [name]: value
        })
    }

    // handleFocus = (event) => {
    //     this.setState({
    //         condition: !this.state.condition
    //     })
    // }

    // onKeyUp={value = value.replace(/[^\d]/g,'') }


    render(){
        const {assetNowPrincipal, assetNowDeposit, workStarted, workEnded, Year, earns, mCost} = this.state
        return( 
            <main id="plan">
                    <div className="left">
                        <div className="asset assetNow">
                            <div className="title">資產現況</div><br/>
                            <div className="block">
                                <div className="input col-3 input-effect assetNowPrincipal">
                                    <input name="assetNowPrincipal" 
                                           className={assetNowPrincipal !== ''?'has-content effect-16':"effect-16"} 
                                           type="text"   
                                           value={assetNowPrincipal} 
                                           onChange={this.handleInputChange} 
                                           onKeyUp={this.handleKeyup} />
                                    <label>現有存款</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="input col-3 input-effect assetNowDeposit">
                                    <input name="assetNowDeposit" 
                                           className={assetNowDeposit !== ''?'has-content effect-16':"effect-16"}
                                           type="text"  
                                           value={assetNowDeposit} 
                                           onChange={this.handleInputChange}
                                           onkeyUp={this.handleKeyup} />
                                    <label>每月固定存款</label>
                                    <span className="focus-border"></span>
                                </div>
                            </div>
                        </div>
                        <div className="asset assetFuture">
                            <div className="title">預期未來生活</div><br/>
                            <div className="block">
                                <div className="input col-3 input-effect workStarted">
                                    <input name="workStarted" 
                                           className={workStarted !== ''?"has-content effect-16":'effect-16'} 
                                           type="text"
                                           value={workStarted} 
                                           onChange={this.handleInputChange}
                                           onKeyUp={this.handleKeyup}
                                           />
                                    <label>預計幾歲開始工作</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="input col-3 input-effect workEnded">
                                    <input name="workEnded" 
                                           className={workEnded !== ''?'has-content effect-16':"effect-16"} 
                                           type="text"
                                           value={workEnded} 
                                           onChange={this.handleInputChange}
                                           onKeyUp={this.handleKeyup} />
                                    <label>預計幾歲退休</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="input col-3 input-effect Year">
                                    <input name="Year" 
                                           className={Year !== ''? 'has-content effect-16':"effect-16"} 
                                           type="text"
                                           value={Year} 
                                           onChange={this.handleInputChange}
                                           onKeyUp={this.handleKeyup}/>
                                    <label>預計年齡（預設100歲)</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="input col-3 input-effect earns">
                                    <input name="earns" 
                                           className={earns !== ''?'has-content effect-16':"effect-16"} 
                                           type="text"
                                           value={earns} 
                                           onChange={this.handleInputChange}
                                           onKeyUp={this.handleKeyup}/>
                                    <label>預計工作時的月收入</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="input col-3 input-effect mCost">
                                    <input name="mCost" 
                                           className={mCost !== ''?'has-content effect-16':"effect-16"} 
                                           type="text"
                                           value={mCost} 
                                           onChange={this.handleInputChange}
                                           onKeyUp={this.handleKeyup}/>
                                    <label>預計一個月的生活開銷</label>
                                    <span className="focus-border"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="range-slider">
                            <input id="range" type="range" value="2" min="0" max="10" step="0.1"/>
                            {/* onInput={() => {this.change; this.level}}
                                onChange={() => {this.change; this.level}}  */}
                            <span id="value">2%</span>
                            <div id="level">
                            </div>
                        <div className="chart">chart</div>
                    </div>
                </div>
            </main>    
                
        )
    }
}


  
export default Plan
