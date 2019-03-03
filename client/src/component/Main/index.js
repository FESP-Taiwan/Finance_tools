import React, {Component} from 'react';
import './main.css'
 
class Main extends Component {
 
  render() {
    const {onChange} = this.props  
    return(
        <div className="article">
            <header>
                <pre id="slogan">   一個月要多少薪水<br/>才能過你心中的理想生活？</pre>
                <button type="button" onClick={() => onChange('plan')}>開始規劃</button>
            </header>
            <hr className="hr1" />
            <hr className="hr2" />
            <div className="line -l"></div>
            <div className="line -c"></div>
            <div className="line -r"></div>
            <section id="1">
                <div className="topic">
                線上<br/>
                資產/理財規劃
                </div>
                <div className="describe">專業理財師團隊基於國際主流理財規劃<br/>
                和資產配置理論，將智能算法和實踐<br/>
                經驗結合，從收支預算、建立保障到<br/>
                財富增值，為您定制專屬規劃方案。</div>
            </section>
            <section id="2">456</section>
            <section id="3">789</section>
        </div>
    )
  }
}

  
export default Main
