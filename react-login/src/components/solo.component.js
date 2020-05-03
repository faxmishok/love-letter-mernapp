import React, { Component } from "react";
import {Launcher} from 'react-chat-window'
import { Button } from 'semantic-ui-react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './solo.css';
import card1 from './backcard/card1.jpg';
import card2 from './backcard/card2.jpg';
import card3 from './backcard/card3.jpg';
import card4 from './backcard/card4.jpg';
import card5 from './backcard/card5.jpg';
import card6 from './backcard/card6.jpg';
import card7 from './cards/baron.jpg';
import card8 from './cards/countess.jpg';
import card9 from './cards/guard.jpg';
import card10 from './cards/handmaid.jpg';
import card11 from './cards/king.jpg';
import card12 from './cards/priest.jpg';
import card13 from './cards/prince.jpg';
import card14 from './cards/princess.jpg';


export default class Solo extends Component {
          state = {
            top: [card1],
            bottom: [card2],
            rear: [card3],
            bottom2: [card4],
            bottom3: [card5],
            mycards: [card8],
            transition: {
              item: null,
              startTop: 20,
              startAnim: true,
            }
          }

          moveDown = (item, evt) => {
            const listBottom = this.bottomList.offsetTop + this.bottomList.clientHeight;
            const itemTop = (evt.target.offsetTop - listBottom) + this.topList.offsetTop;
            const { top, bottom,rear,bottom2,bottom3, transition } = this.state;
            transition.item = item;
            transition.startTop = itemTop;
            transition.startAnim = false;
            this.setState({
              top: top.filter(x => x !== item),
              bottom: [...bottom, item]
            })
            setTimeout(() => this.resetState(), 1);
          }
          
          moveUp = (item, evt) => {
            const listBottom = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listBottom;
            const {top, bottom,rear,bottom2,bottom3, transition } = this.state;
            transition.item = item;
            transition.startTop = itemTop;
            transition.startAnim = false;
            this.setState({
              top: [...top, item],
              bottom: bottom.filter(x => x !== item),
              transition,
            })
            setTimeout(() => this.resetState(), 1);
          }

          moveDownLeft = (item, evt) => {
            const listDownlLeft = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listDownlLeft;
            const { top, bottom,rear,bottom2,bottom3, transition  } = this.state;
            transition.item = item;
            transition.startTop = itemTop/4;
            transition.startAnim = false;
            this.setState({
              top: [...top, item],
              rear: rear.filter(x => x !== item),
              transition,
            })
            setTimeout(() => this.resetState(), 1);
          }
          moveUp2 = (item, evt) => {
            const listBottom2 = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listBottom2;
            const { top, bottom,rear,bottom2,bottom3, transition  } = this.state;
            transition.item = item;
            transition.startTop = itemTop/4;
            transition.startAnim = false;
            this.setState({
              top: [...top, item],
              bottom2: bottom2.filter(x => x !== item),
              transition,
            })
            setTimeout(() => this.resetState(), 1);
          }
          moveUp3 = (item, evt) => {
            const listBottom3 = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listBottom3;
            const { top, bottom,rear,bottom2,bottom3, transition } = this.state;
            transition.item = item;
            transition.startTop = itemTop/4;
            transition.startAnim = false;
            this.setState({
              top: [...top, item],
              bottom3: bottom3.filter(x => x !== item),
              transition,
            })
            setTimeout(() => this.resetState(), 1);
          }

          delete = (item, evt) => {
            const listBottom3 = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listBottom3;
            const { top, bottom,rear,bottom2,bottom3,mycards, transition } = this.state;
            transition.item = false;
            transition.startTop = false;
            transition.startAnim = false;
            this.setState({
              mycards: mycards.filter(x => x !== item),
              transition,
            })
            setTimeout(() => this.resetState(), 1);
          }



          resetState = () => {
            const { transition } = this.state;
            transition.startAnim = true;
            this.setState({transition});
          }
          
          render() {
            let { top, bottom,rear,bottom2,bottom3,mycards, transition} = this.state
            return (
            	<div className="bcksolo">
              <div className="container1">
                <div ref={(node) => { this.topList = node; }}>
                  {top.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-top ${animClass}`}
                        onClick={(evt) => this.moveDown(item, evt)}
                        style={style}
                      >
                                    <img src={item} width="125"/>

                      </div>
                    )
                  })}
                </div>

              <div className="containerrow_mycard">


                  
                    
                      
                                    <img src={mycards[0]} width="125" className="item-mycard1"/>
                                    <img src={mycards[1]} width="125" className="item-mycard2"/>
                                                        <button >Solo</button>



    <div>
      {(() => {
        if (mycards[0]==="/static/media/baron.ce4d41dc.jpg") {
          return (
            <div className="about1"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div>
          )
        } else if (mycards[0]==="/static/media/countess.a48c395a.jpg") {
          return (
            <div className="about1"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately.             </div>
          )
        } 
        else if (mycards[0]==="/static/media/guard.b6e3701e.jpg") {
          return (
            <div className="about1"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div>
        )
    } 
      else if (mycards[0]==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div className="about1"><p>Handmaid</p>
Player cannot be affected by any other player's card until the next turn. 
        </div>
        )
    } 
    else if (mycards[0]==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div className="about1"><p>Handmaid</p>
    Player cannot be affected by any other player's card until the next turn. 
        </div>
        )
    } 
else if (mycards[0]==="/static/media/king.07e83cb7.jpg") {
          return (
            <div className="about1"><p>King</p>
Player trades hands with any other player.         </div>
        )
    } 
    else if (mycards[0]==="/static/media/priest.ae71698d.jpg") {
          return (
            <div className="about1"><p>Priest</p>
Player is allowed to see another player's hand.         </div>
        )
    } 
        else if (mycards[0]==="/static/media/prince.02c4993a.jpg") {
          return (
            <div className="about1"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div>
        )
    } 
        else if (mycards[0]==="/static/media/princess.700d28a3.jpg") {
          return (
            <div className="about1"><p>Princess</p>
If a player plays this card for any reason, they are eliminated from the round.          </div>
        )
    } 

      })()}

            {(() => {
        if (mycards[1]==="/static/media/baron.ce4d41dc.jpg") {
          return (
            <div className="about2"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div>
          )
        } else if (mycards[1]==="/static/media/countess.a48c395a.jpg") {
          return (
            <div className="about2"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately.             </div>
          )
        } 
        else if (mycards[1]==="/static/media/guard.b6e3701e.jpg") {
          return (
            <div className="about2"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div>
        )
    } 
      else if (mycards[1]==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div className="about2"><p>Handmaid</p>
Player cannot be affected by any other player's card until the next turn. 
        </div>
        )
    } 
    else if (mycards[1]==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div className="about2"><p>Handmaid</p>
    Player cannot be affected by any other player's card until the next turn. 
        </div>
        )
    } 
else if (mycards[1]==="/static/media/king.07e83cb7.jpg") {
          return (
            <div className="about2"><p>King</p>
Player trades hands with any other player.         </div>
        )
    } 
    else if (mycards[1]==="/static/media/priest.ae71698d.jpg") {
          return (
            <div className="about2"><p>Priest</p>
Player is allowed to see another player's hand.         </div>
        )
    } 
        else if (mycards[1]==="/static/media/prince.02c4993a.jpg") {
          return (
            <div className="about2"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div>
        )
    } 
        else if (mycards[1]==="/static/media/princess.700d28a3.jpg") {
          return (
            <div className="about2"><p>Princess</p>
If a player plays this card for any reason, they are eliminated from the round.          </div>
        )
    } 

      })()}
    </div>

                </div>

               <div className="container2">

                  <div ref={(node) => { this.bottomList = node; }}>
                  {bottom.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-bottom ${animClass}`}
                        onClick={(evt) => this.moveUp(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                      </div>
                    )
                  })}
                </div>


                  <div ref={(node) => { this.rearList = node; }}>
                {rear.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-rear ${animClass}`}
                        onClick={(evt) => this.moveDownLeft(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125" />
                      </div>
                    )
                  })}
                </div>




                  <div ref={(node) => { this.bottom2List = node; }}>
                  {bottom2.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-bottom2 ${animClass}`}
                        onClick={(evt) => this.moveUp2(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                                              </div>

                    )
                  })}
                </div>




                  <div ref={(node) => { this.bottom3List = node; }}>
                  {bottom3.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-bottom3 ${animClass}`}
                        onClick={(evt) => this.moveUp3(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                      </div>
                    )
                  })}
                </div>
                </div>




              </div>


              </div>
             
            )
          }
}