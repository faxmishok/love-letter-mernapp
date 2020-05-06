import React, { Component } from "react";
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
            deck: [card7,card7,card8,card9,card9,card9,card9,card9,card10,card10,card11,card12,card12,card13,card13,card14],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            top: [card1],
            bottom: [card2],
            rear: [card3],
            bottom2: [card4],
            bottom3: [card5],
            mycards0: [],
            mycards1: [],
            showButton:false,
            setShowButton:false,
            transition: {
              item: null,
              startTop: 20,
              startAnim: true,
            },
            draw : '',
            alreadyDrawn: [],
            turnNumber: 0
          }

          startGame = () =>{
            this.draw();
            this.state.player1[0]=this.state.draw;
            this.draw();
            this.state.player2[0]=this.state.draw;
            this.draw();
            this.state.player3[0]=this.state.draw;
            this.draw();
            this.state.player4[0]=this.state.draw;

            console.log("Game started");
            console.log(this.state.alreadyDrawn);
          }
          startTurn = (id,evt) =>{
            id=this.state.turnNumber;
            if (id == 0){
              this.startGame();
            }
            console.log(this.state.turnNumber);
            const { mycards0,mycards1,player1,player2,player3,player4 } = this.state;
              switch (id%4){
                case 0:
                  this.draw();
                  player1[1]=this.state.draw;
                  this.setState({mycards0:player1[0]});
                  this.setState({mycards1:player1[1]});
                  break;
                case 1:
                  this.draw();
                  player2[1]=this.state.draw;
                  this.setState({mycards0:player2[0]});
                  this.setState({mycards1:player2[1]});
                  break;
                case 2:
                  this.draw();
                  player3[1]=this.state.draw;
                  this.setState({mycards0:player3[0]});
                  this.setState({mycards1:player3[1]});
                  break;
                case 3:
                  this.draw();
                  player4[1]=this.state.draw;
                  this.setState({mycards0:player4[0]});
                  this.setState({mycards1:player4[1]});
                  break;
              }
              this.state.turnNumber ++;
                  console.log(this.state.player1);
                  console.log(this.state.player2);
                  console.log(this.state.player3);
                  console.log(this.state.player4);

          }

          async draw(){
            const { deck, alreadyDrawn } = this.state;
            var found = false;
            if (alreadyDrawn.length == 16){
              this.setState({draw: card6});
              return
            }
            while(1){
            found = false;
            const n = Math.floor(16 * Math.random());
            for( var i = 0; i < alreadyDrawn.length+1; i++ ) {
              if ( alreadyDrawn[i] === n ) {
                found = true;
                break;
              }
            }
            if(found === false){
              this.state.draw = deck[n];
              alreadyDrawn[alreadyDrawn.length] = n;
              break;
            }
          }
          
          }
          moveDown = (item, evt) => {
            const listBottom = this.bottomList.offsetTop + this.bottomList.clientHeight;
            const itemTop = (evt.target.offsetTop - listBottom) + this.topList.offsetTop;
            const { top, bottom,rear,bottom2,bottom3, transition } = this.state;
            transition.item = item;
            this.draw();
            transition.startTop = itemTop/5;
            transition.startAnim = false;
            this.setState({
              top: top.filter(x => x !== item),
              rear: [...rear, item]
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

     usePriest = evt => { var { showButton } = this.state;  this.setState({showButton : true})}

     usePriest_id = (evt,id,zero_one) => { 

            var { rear,bottom2,bottom3,bottom,player1, player2, player3, player4, mycards0,mycards1,turnNumber,showButton } = this.state;
            var whichPlayer;
            switch(id){
              case 0:
                whichPlayer = player1[0];
                rear[1]=whichPlayer;
                rear[0]=card6;
                break;
              case 1:    
                whichPlayer = player2[0];
                bottom[1]=whichPlayer;
                bottom[0]=card6;
                break;
              case 2:
                whichPlayer = player3[0];
                bottom2[1]=whichPlayer;
                bottom2[0]=card6;
                break;
              case 3:
                whichPlayer = player4[0];
                bottom3[1]=whichPlayer;
                bottom3[0]=card6;
                break;
            }

               {(() => {
        if (zero_one===0) {
          mycards0=null;
        }  else {
                     mycards1=null;
        }
          })()}

          switch(turnNumber%4){
              case 1:
                switch(zero_one){
                  case 0:
                    player1[0]=player1[1]
                    break;
                  case 1:
                    break;
                }
                player1[zero_one]=null;
                break;
              case 2:    
                switch(zero_one){
                  case 0:
                    player2[0]=player2[1]
                    break;
                  case 1:
                    break;
                }
                player2[zero_one]=null;
                break;
              case 3:
                switch(zero_one){
                  case 0:
                    player3[0]=player3[1]
                    break;
                  case 1:
                    break;
                }
                player3[zero_one]=null;
                break;
              case 4:
                switch(zero_one){
                  case 0:
                    player4[0]=player4[1]
                    break;
                  case 1:
                    break;
                }
                player4[zero_one]=null;
                break;
            }


                // bottom[1]=whichPlayer;
                // bottom[0]=card6;
                // console.log(bottom);
              this.setState({ rear,bottom2,bottom3,bottom,player1, player2, player3, player4, mycards0,mycards1 })
              this.setState({showButton : false})

     }

          
          render() {
            let { top,showButton,setShowButton, bottom,rear,bottom2,bottom3,mycards0,mycards1, transition} = this.state
            return (
              
              <div className="bcksolo">

              <div className="container1">
              <button className="down" onClick={this.startTurn}>Turn</button>

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


                  
                                  
                  <img src={mycards0} width="125" className="item-mycard1"/>
                  <img src={mycards1} width="125" className="item-mycard2"/>
                  
           

    <div>
      {(() => {
        if (mycards0==="/static/media/baron.ce4d41dc.jpg") {
          return (

 <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>

            <div className="about1"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div>
      </div>
          )
        } else if (mycards0==="/static/media/countess.a48c395a.jpg") {
          return (
 <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately. 
          </div>            </div>
          )
        } 
        else if (mycards0==="/static/media/guard.b6e3701e.jpg") {
          return (
             <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div></div>
        )
    } 
      else if (mycards0==="/static/media/handmaid.9c912d77.jpg") {
          return (
             <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>Handmaid</p>
Player cannot be affected by any other player's card until the next turn. 
        </div></div>
        )
    } 

else if (mycards0==="/static/media/king.07e83cb7.jpg") {
          return (
             <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>King</p>
Player trades hands with any other player.         </div></div>
        )
    } 
    else if (mycards0==="/static/media/priest.ae71698d.jpg") {
          return ( 
<div>
    {showButton && (
      <div>
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,0)} >Player1</button>
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,0)}>Player2</button>
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,0)}>Player3</button>
        <button className="button_player4" onClick={evt => this.usePriest_id(evt,3,0)}>Player4</button>
      </div>
    )}
    <button className="button_card1_use" onClick={evt => this.usePriest(evt)}>
      Use
    </button>
    <button className="button_card1_discard">Discard</button>
    <div className="about1">
      <p>Priest</p>
      Player is allowed to see another player's hand.
    </div>
</div>
) 
    } 
        else if (mycards0==="/static/media/prince.02c4993a.jpg") {
          return ( <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div></div>
        )
    } 
        else if (mycards0==="/static/media/princess.700d28a3.jpg") {
          return (
             <div>
            <button className="button_card1_use">Use</button>
                  <button className="button_card1_discard">Discard</button>
            <div className="about1"><p>Princess</p>
If a player plays this card for any reason, they are eliminated from the round.          </div></div>
        )
    } 

      })()}

            {(() => {
        if (mycards1==="/static/media/baron.ce4d41dc.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div></div>
          )
        } else if (mycards1==="/static/media/countess.a48c395a.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately.             </div></div>
          )
        } 
        else if (mycards1==="/static/media/guard.b6e3701e.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div></div>
        )
    } 
      else if (mycards1==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Handmaid</p>
Player cannot be affected by any other player's card until the next turn. 
        </div></div>
        )
    } 
    else if (mycards1==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Handmaid</p>
    Player cannot be affected by any other player's card until the next turn. 
        </div></div>
        )
    } 
else if (mycards1==="/static/media/king.07e83cb7.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>King</p>
Player trades hands with any other player.         </div></div>
        )
    } 
    else if (mycards1==="/static/media/priest.ae71698d.jpg") {
              return ( 
<div>
    {showButton && (
      <div>
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,1)} >Player1</button>
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,1)}>Player2</button>
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,1)}>Player3</button>
        <button className="button_player4" onClick={evt => this.usePriest_id(evt,3,1)}>Player4</button>
      </div>
    )}
    <button className="button_card2_use" onClick={evt => this.usePriest(evt)}>
      Use
    </button>
    <button className="button_card2_discard">Discard</button>
    <div className="about1">
      <p>Priest</p>
      Player is allowed to see another player's hand.
    </div>
</div>
) 
    } 
        else if (mycards1==="/static/media/prince.02c4993a.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div></div>
        )
    } 
        else if (mycards1==="/static/media/princess.700d28a3.jpg") {
          return (
            <div>
            <button className="button_card2_use">Use</button>
                  <button className="button_card2_discard">Discard</button>
            <div className="about2"><p>Princess</p>
If a player plays this card for any reason, they are eliminated from the round.          </div></div>
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