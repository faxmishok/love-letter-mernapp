import React, { Component } from "react";
import io from 'socket.io-client';



import 'bootstrap/dist/css/bootstrap.min.css';
import './solo.css'
import card1 from './backcard/card1.jpg';
import card2 from './backcard/card2.jpg';
import card3 from './backcard/card3.jpg';
import card4 from './backcard/card4.jpg';
import card5 from './backcard/card5.jpg';
import card6 from './backcard/card6.jpg';
import card_baron from './cards/baron.jpg';
import card_countess from './cards/countess.jpg';
import card_guard from './cards/guard.jpg';
import card_handmaid from './cards/handmaid.jpg';
import card_king from './cards/king.jpg';
import card_priest from './cards/priest.jpg';
import card_prince from './cards/prince.jpg';
import card_princess from './cards/princess.jpg';


export default class Game extends Component {
    state = {
        deck: [card_baron, card_baron, card_countess, card_guard, card_guard, card_guard, card_guard, card_guard, card_handmaid, card_handmaid, card_king, card_priest, card_priest, card_prince, card_prince, card_princess],
        player: [
            [null],
            [null],
            [null],
            [null]
        ],
        top: [card1],
        bottom: [card2],
        rear: [card3],
        bottom2: [card4],
        bottom3: [card5],
        mycards0: [],
        mycards1: [],
        showButton_baron: false,
        showButton_priest: false,
        showButton_king: false,
        showButton_guard: false,
        showButton_prince: false,
        guard_select_card: false,
        use_discard_1_0: false,
        id_of_card: 0,
        my_turn: [true, false, false, false],
        transition: {
            item: null,
            startTop: 20,
            startAnim: true,
        },
        draw: '',
        alreadyDrawn: [],
        turnNumber: -1,
        userId: '',
        gameId: ''
    }

    componentDidMount() {
        this.socket = io('http://localhost:5000');

        const gameId = this.props.match.params.id;
        const query = this.props.location.search;
        const userId = query.split('=')[1];
        this.setState({
            userId:userId,
            gameId:gameId,
        })
        console.log(userId)
        
        this.socket.on('GAME_INITIALIZED',(player,turnNumber) => {
          this.setState({
          mycards0 : player[userId-1][0],
          mycards1 : player[userId-1][1],
          use_discard_1_0:true,
          turnNumber:turnNumber
        })
        this.state.my_turn[turnNumber%4]=true;
          console.log(player,this.state.turnNumber)
        });
        this.socket.on('USED_BARON',(playerId,targetId) => {
          console.log('baronused from',playerId,'to',targetId)
        });
        this.socket.on('NEW_TURN',(player,turnNumber) => {
          var {my_turn} = this.state;
          this.setState({
            mycards0 : player[userId-1][0],
            mycards1 : player[userId-1][1],
            use_discard_1_0:true,
            turnNumber:turnNumber,
          })
          this.state.my_turn[(this.state.turnNumber-1)%4]=false;
          this.state.my_turn[this.state.turnNumber%4]=true;
            console.log(player,turnNumber,this.state.my_turn,'newturn') 
            this.setState({ my_turn })
       
          });

      }
      componentWillUnmount() {
        this.socket.removeAllListeners();
        this.socket.close();
      }
    
      startTurn = () =>{
        if(this.state.turnNumber== -1){
        this.socket.emit('INITIALIZE_GAME',this.state.userId);
        }else{
          this.socket.emit('START_TURN',this.state.userId);

        }
      }

      /* CARD LOGIC */
      useBaron = evt => { var { showButton_baron } = this.state;
        this.setState({ showButton_baron: true }) }
    useBaron_id = (evt, id, zero_one) => {
      
        this.setState({ showButton_baron: false });
        this.socket.emit('BARON_USED',this.state.userId,id);
        this.setState({ use_discard_1_0: false });


    }
    
    render() {
        let { my_turn, use_discard_1_0, top,showButton_prince, showButton_baron, showButton_guard, showButton_priest, showButton_king, guard_select_card, bottom, rear, bottom2, bottom3, mycards0, mycards1, transition } = this.state
        return (

            <div className="bcksolo">
              <div className="container1">
              {!use_discard_1_0 && my_turn[this.state.userId-1] && (
              <button className="down" onClick={this.startTurn}>Turn</button>
)}
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
                        //onClick={(evt) => this.moveDown(item, evt)}
                        style={style}
                      >
                                    <img src={item} width="125"/>

                      </div>
                    )
                  })}
                </div>

              <div className="containerrow_mycard">


                  

            <div>
                <img src={this.state.mycards0} width="125" className="item-mycard1"/>
                <img src={this.state.mycards1} width="125" className="item-mycard2"/>
            </div>

    <div>
      {(() => {
        if (mycards0==="/static/media/baron.ce4d41dc.jpg") {
          return (

 <div>
 {showButton_baron && (
      <div>
      {my_turn[this.state.userId-1] &&( 
        <button className="button_player1" onClick={evt => this.useBaron_id(evt,0,0)} >Player1</button>)}
      {my_turn[this.state.userId-1] &&( 
        <button className="button_player2" onClick={evt => this.useBaron_id(evt,1,0)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player3" onClick={evt => this.useBaron_id(evt,2,0)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player4" onClick={evt => this.useBaron_id(evt,3,0)}>Player4</button>)}
      </div>
    )}

  {use_discard_1_0 && my_turn[this.state.userId-1] && (
    <div>
            <button className="button_card1_use" onClick={evt => this.useBaron(evt)}>Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
    </div>
)}
            <div className="about1"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div>
      </div>
          )
        } else if (mycards0==="/static/media/countess.a48c395a.jpg") {
          return (
 <div>
   {use_discard_1_0 &&(
    <div>
            <button className="button_card1_use" onClick={evt => this.discard_card(evt,0)}>Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
    </div>
)}
            <div className="about1"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately. 
          </div>            </div>
          )
        } 
        else if (mycards0==="/static/media/guard.b6e3701e.jpg") {
          return (

             <div>
             {showButton_guard && (
      <div>
      {my_turn[this.state.userId-1] &&( 
        <button className="button_player1" onClick={evt => this.useGuard_id(evt,0,0)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player2" onClick={evt => this.useGuard_id(evt,1,0)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player3" onClick={evt => this.useGuard_id(evt,2,0)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player4" onClick={evt => this.useGuard_id(evt,3,0)}>Player4</button>)}
      </div>
    )}
{guard_select_card && (
      <div>
        <button className="button_Priest" onClick={evt => this.useGuard_id_card(evt,0)}>Priest</button>
        <button className="button_Baron" onClick={evt => this.useGuard_id_card(evt,1)}>Baron</button>
        <button className="button_Handmaid" onClick={evt => this.useGuard_id_card(evt,2)}>Handmaid</button>
         <button className="button_Prince" onClick={evt => this.useGuard_id_card(evt,3)} >Prince</button>
        <button className="button_King" onClick={evt => this.useGuard_id_card(evt,4)}>King</button>
        <button className="button_Countess" onClick={evt => this.useGuard_id_card(evt,5)}>Countess</button>
        <button  className="button_Princess" onClick={evt => this.useGuard_id_card(evt,6)}>Princess</button>
      </div>

    )}
   {use_discard_1_0 &&(
    <div>
            <button className="button_card1_use" onClick={evt => this.useGuard(evt)}>Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
                  </div>
                  )}
            <div className="about1"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div></div>
        )
    } 
      else if (mycards0==="/static/media/handmaid.9c912d77.jpg") {
          return (
             <div>
            {use_discard_1_0 &&(
    <div>
            <button className="button_card1_use" onClick={evt => this.useHandmaid_id(evt,0)} >Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
                  </div>
                  )}
            <div className="about1"><p>Handmaid</p>
Player cannot be affected by any other player's card until the next turn. 
        </div></div>
        )
    } 

else if (mycards0==="/static/media/king.07e83cb7.jpg") {
          return (
             <div>
             {showButton_king && (
      <div>
      {my_turn[this.state.userId-1] &&( 
        <button className="button_player1" onClick={evt => this.useKing_id(evt,0,0)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player2" onClick={evt => this.useKing_id(evt,1,0)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player3" onClick={evt => this.useKing_id(evt,2,0)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&( 
        <button className="button_player4" onClick={evt => this.useKing_id(evt,3,0)}>Player4</button>)}
      </div>
    )}
             {use_discard_1_0 &&(
    <div>
            <button className="button_card1_use" onClick={evt => this.useKing(evt)}>Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
                  </div>
                  )}
            <div className="about1"><p>King</p>
Player trades hands with any other player.         </div></div>
        )
    } 
    else if (mycards0==="/static/media/priest.ae71698d.jpg") {
          return ( 
<div>
    {showButton_priest && (
      <div>
      {my_turn[this.state.userId-1] &&(
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,0)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,0)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,0)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player4" onClick={evt => this.usePriest_id(evt,3,0)}>Player4</button>)}
      </div>
    )}
    {use_discard_1_0 &&(
    <div>
    <button className="button_card1_use" onClick={evt => this.usePriest(evt)}>
      Use
    </button>
    <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
    </div>
    )}
    <div className="about1">
      <p>Priest</p>
      Player is allowed to see another player's hand.
    </div>
</div>
) 
    } 
        else if (mycards0==="/static/media/prince.02c4993a.jpg") {
          return ( <div>
            {showButton_prince && (
      <div>
        <button className="button_player1" onClick={evt => this.usePrince_id(evt,0,0)} >Player1</button>
        <button className="button_player2" onClick={evt => this.usePrince_id(evt,1,0)}>Player2</button>
        <button className="button_player3" onClick={evt => this.usePrince_id(evt,2,0)}>Player3</button>
        <button className="button_player4" onClick={evt => this.usePrince_id(evt,3,0)}>Player4</button>
      </div>
    )}
            {use_discard_1_0 &&(
    <div>

            <button className="button_card1_use" onClick={evt => this.usePrince(evt)}>Use</button>
                  <button className="button_card1_discard" onClick={evt => this.discard_card(evt,0)}>Discard</button>
                  </div>
                  )}
            <div className="about1"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div></div>
        )
    } 
        else if (mycards0==="/static/media/princess.700d28a3.jpg") {
          return (
             <div>
            {use_discard_1_0 &&(
    <div>
            <button className="button_card1_use" onClick={evt => this.usePrincess_id(evt,0)}>Use</button>
                  </div>
                  )}
            <div className="about1"><p>Princess</p>
If a player plays this card for any reason, they are eliminated from the round.          </div></div>
        )
    } 

      })()}

            {(() => {
        if (mycards1==="/static/media/baron.ce4d41dc.jpg") {
          return (
            <div>
            {showButton_baron && (
      <div>
      {my_turn[this.state.userId-1] &&(
        <button className="button_player1" onClick={evt => this.useBaron_id(evt,0,1)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player2" onClick={evt => this.useBaron_id(evt,1,1)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player3" onClick={evt => this.useBaron_id(evt,2,1)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player4" onClick={evt => this.useBaron_id(evt,3,1)}>Player4</button>)}
      </div>
    )}
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.useBaron(evt)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>
                  )}
            <div className="about2"><p>BARON</p>
            Player will choose another player and privately compare hands. The player with the lower-strength hand is eliminated from the round. 
            </div></div>
          )
        } else if (mycards1==="/static/media/countess.a48c395a.jpg") {
          return (
            <div>
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.discard_card(evt,1)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>)}
            <div className="about2"><p>Countess</p>
          If a player holds both this card and either the King or Prince card, this card must be played immediately.             </div></div>
          )
        } 
        else if (mycards1==="/static/media/guard.b6e3701e.jpg") {
          return (
            <div>
            {showButton_guard && (
      <div>
      {my_turn[this.state.userId-1] &&(
        <button className="button_player1" onClick={evt => this.useGuard_id(evt,0,1)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player2" onClick={evt => this.useGuard_id(evt,1,1)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player3" onClick={evt => this.useGuard_id(evt,2,1)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player4" onClick={evt => this.useGuard_id(evt,3,1)}>Player4</button>)}
      </div>
    )}
{guard_select_card && (
      <div>
        <button className="button_Priest" onClick={evt => this.useGuard_id_card(evt,0)}>Priest</button>
        <button className="button_Baron" onClick={evt => this.useGuard_id_card(evt,1)}>Baron</button>
        <button className="button_Handmaid" onClick={evt => this.useGuard_id_card(evt,2)}>Handmaid</button>
         <button className="button_Prince" onClick={evt => this.useGuard_id_card(evt,3)} >Prince</button>
        <button className="button_King" onClick={evt => this.useGuard_id_card(evt,4)}>King</button>
        <button className="button_Countess" onClick={evt => this.useGuard_id_card(evt,5)}>Countess</button>
        <button  className="button_Princess" onClick={evt => this.useGuard_id_card(evt,6)}>Princess</button>
      </div>

    )}
{use_discard_1_0 &&(
    <div>
            <button className="button_card2_use"  onClick={evt => this.useGuard(evt)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>)}
            <div className="about2"><p>Guard</p>
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.           )
        </div></div>
        )
    } 

    else if (mycards1==="/static/media/handmaid.9c912d77.jpg") {
          return (
            <div>
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.useHandmaid_id(evt,1)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>)}
            <div className="about2"><p>Handmaid</p>
    Player cannot be affected by any other player's card until the next turn. 
        </div></div>
        )
    } 
else if (mycards1==="/static/media/king.07e83cb7.jpg") {
          return (
            <div>
            {showButton_king && (
      <div>
      {my_turn[this.state.userId-1] &&(
        <button className="button_player1" onClick={evt => this.useKing_id(evt,0,1)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player2" onClick={evt => this.useKing_id(evt,1,1)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player3" onClick={evt => this.useKing_id(evt,2,1)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player4" onClick={evt => this.useKing_id(evt,3,1)}>Player4</button>)}
      </div>
    )}
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.useKing(evt)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>)}
            <div className="about2"><p>King</p>
Player trades hands with any other player.         </div></div>
        )
    } 
    else if (mycards1==="/static/media/priest.ae71698d.jpg") {
              return ( 
<div>
    {showButton_priest && (
      <div>
      {my_turn[this.state.userId-1] &&(
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,1)} >Player1</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,1)}>Player2</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,1)}>Player3</button>)}
        {my_turn[this.state.userId-1] &&(
        <button className="button_player4" onClick={evt => this.usePriest_id(evt,3,1)}>Player4</button>)}

      </div>
    )}
    {use_discard_1_0 &&(
    <div>
    <button className="button_card2_use" onClick={evt => this.usePriest(evt)}>
      Use
    </button>
    <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
    </div>)}
    <div className="about2">
      <p>Priest</p>
      Player is allowed to see another player's hand.
    </div>
</div>
) 
    } 
        else if (mycards1==="/static/media/prince.02c4993a.jpg") {
          return (
            <div>
            {showButton_prince && (
      <div>
        <button className="button_player1" onClick={evt => this.usePrince_id(evt,0,1)} >Player1</button>
        <button className="button_player2" onClick={evt => this.usePrince_id(evt,1,1)}>Player2</button>
        <button className="button_player3" onClick={evt => this.usePrince_id(evt,2,1)}>Player3</button>
        <button className="button_player4" onClick={evt => this.usePrince_id(evt,3,1)}>Player4</button>
      </div>
    )}
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.usePrince(evt)}>Use</button>
                  <button className="button_card2_discard" onClick={evt => this.discard_card(evt,1)}>Discard</button>
                  </div>)}
            <div className="about2"><p>Prince</p>
Player can choose any player (including themselves) to discard their hand and draw a new one. If the discarded card is the Princess, the discarding player is eliminated.          </div></div>
        )
    } 
        else if (mycards1==="/static/media/princess.700d28a3.jpg") {
          return (
            <div>
            {use_discard_1_0 &&(
    <div>
            <button className="button_card2_use" onClick={evt => this.usePrincess_id(evt,1)}>Use</button>
            </div>)}
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
                        //onClick={(evt) => this.moveUp(item, evt)}
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
                        //onClick={(evt) => this.moveDownLeft(item, evt)}
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
                        //onClick={(evt) => this.moveUp2(item, evt)}
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
                        //onClick={(evt) => this.moveUp3(item, evt)}
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