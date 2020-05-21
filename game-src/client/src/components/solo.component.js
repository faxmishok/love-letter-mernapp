import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './solo.css';
// import card1 from './backcard/card1.jpg';
import card1 from './backcard/bgcard1.png';
import card2 from './backcard/bgcard2.png';
import card3 from './backcard/bgcard3.png';
import card4 from './backcard/bgcard4.png';
import card5 from './backcard/bgcard5.png';
import card6 from './backcard/bgcard6.png';
import card7 from './backcard/bgcard7.png';
import card8 from './backcard/bgcard8.png';
import card9 from './backcard/bgcard9.png';
import card10 from './backcard/bgcard10.png';
import card11 from './backcard/bgcard11.png';
import card12 from './backcard/bgcard12.png';
import card13 from './backcard/bgcard13.png';
import card14 from './backcard/bgcard14.png';
import card15 from './backcard/bgcard15.png';
import card16 from './backcard/bgcard16.png';
import card17 from './backcard/bgcard17.png';


// import card_baron from './cards/baron.jpg';
// import card_countess from './cards/countess.jpg';
// import card_guard from './cards/guard.jpg';
// import card_handmaid from './cards/handmaid.jpg';
// import card_king from './cards/king.jpg';
// import card_priest from './cards/priest.jpg';
// import card_prince from './cards/prince.jpg';
// import card_princess from './cards/princess.jpg';

import card_baron from './GoT/3-BARON.png';
import card_countess from './GoT/7-COUNTESS.png';
import card_guard from './GoT/1-GUARD.png';
import card_handmaid from './GoT/4-HANDMAIDEN.png';
import card_king from './GoT/6-KING.png';
import card_priest from './GoT/2-PRIEST.png';
import card_prince from './GoT/5-PRINCE.png';
import card_princess from './GoT/8-PRINCESS.png';
export default class Solo extends Component {
    state = {
        deck: [card_baron, card_baron, card_countess, card_guard, card_guard, card_guard, card_guard, card_guard, card_handmaid, card_handmaid, card_king, card_priest, card_priest, card_prince, card_prince, card_princess],
        player: [
            [null],
            [null],
            [null],
            [null]
        ],
        top: [card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17],
        discard:[],
        bottom: [card2],
        rear: [card1],
        bottom2: [card3],
        bottom3: [card4],
        mycards0: [card16],
        mycards1: [card16],
        showButton_baron: false,
        showButton_priest: false,
        showButton_king: false,
        showButton_guard: false,
        showButton_prince: false,
        guard_select_card: false,
        use_discard_1_0: false,
        show_background: [true,true,true,true],
        id_of_card: 0,
        global_counter: 0,
        my_turn: [true, true, true, true],
        transition: {
            item: null,
            startTop: 20,
            startAnim: true,
        },
        draw: '',
        alreadyDrawn: [],
        turnNumber: -1
    }

    startGame = () => {
        this.draw()
        // this.moveDown(this.state.top[0])
        this.state.global_counter++;
        this.state.player[0][0] = this.state.draw;
        console.log(this.state.top)

        this.draw()
        // this.moveDown1(this.state.top[1])
        this.state.global_counter++;
        this.state.player[1][0] = this.state.draw;

        this.draw()
        // this.moveDown2(this.state.top[2])
        this.state.global_counter++;
        this.state.player[2][0] = this.state.draw;


        
        this.draw()
        // this.moveDown3(this.state.top[3])
        this.state.global_counter++;
        this.state.player[3][0] = this.state.draw;


        console.log("Game started");
        console.log(this.state.alreadyDrawn);
    }
    startTurn = (id, evt) => {
            
        this.state.turnNumber++;




        if (this.state.turnNumber === 0) {

            this.state.my_turn[0] = false
            this.startGame();
                // this.moveDown(this.state.top[this.state.global_counter])
                // this.moveDown1(this.state.top[this.state.global_counter])
                // this.moveDown2(this.state.top[this.state.global_counter])
                // this.moveDown3(this.state.top[this.state.global_counter])

        }



        else{

            this.state.global_counter++


            this.state.my_turn[(this.state.turnNumber-1)%4] = true
            this.state.my_turn[(this.state.turnNumber)%4] = false
        }
        if(this.state.player[0][0]==null)
        {
            this.state.my_turn[0] = false
        }
        if(this.state.player[1][0]==null)
        {
            this.state.my_turn[1] = false

        }
        if(this.state.player[2][0]==null)
        {
            this.state.my_turn[2] = false

        }
        if(this.state.player[3][0]==null)
        {
            this.state.my_turn[3] = false            
        }

         

        const { mycards0, player } = this.state;
        var { use_discard_1_0, my_turn } = this.state;
        this.setState({ use_discard_1_0: true })
        var win = 0;
        if(player[0][1]===card_handmaid)
        {
          this.state.my_turn[0] = false
        }
        if(player[1][1]===card_handmaid)
        {
          this.state.my_turn[1] = false
        }
        if(player[2][1]===card_handmaid)
        {
          this.state.my_turn[2] = false
        }
        if(player[3][1]===card_handmaid)
        {
          this.state.my_turn[3] = false
        }
          this.setState({ my_turn })
                while (player[this.state.turnNumber % 4][0] === null) {
                    this.state.turnNumber++;
                    win++;
                    if (win === 3)
                        alert("YOU WIN")
                }
        
        alert("It is " + (this.state.turnNumber % 4 + 1) + " player's turn")
        console.log(my_turn)

        // console.log(this.state.turnNumber);
        switch (this.state.turnNumber % 4) {
            case 0:
                this.draw();
                player[0][1] = this.state.draw;
                this.setState({ mycards0: player[0][0] });
                this.setState({ mycards1: player[0][1] });
                this.moveDown(this.state.top[0])
                break;
            case 1:
                this.draw();
                player[1][1] = this.state.draw;
                this.setState({ mycards0: player[1][0] });
                this.setState({ mycards1: player[1][1] });
                this.moveDown1(this.state.top[0])
                break;
            case 2:
                this.draw();
                player[2][1] = this.state.draw;
                this.setState({ mycards0: player[2][0] });
                this.setState({ mycards1: player[2][1] });
                this.moveDown2(this.state.top[0])
                break;
            case 3:
                this.draw();
                player[3][1] = this.state.draw;
                this.setState({ mycards0: player[3][0] });
                this.setState({ mycards1: player[3][1] });
                this.moveDown3(this.state.top[0])
                break;
        }
                if(this.state.player[0][0]==null)
        {
            this.state.show_background[0] = false
        }
        if(this.state.player[1][0]==null)
        {
            this.state.show_background[1] = false

        }
        if(this.state.player[2][0]==null)
        {
            this.state.show_background[2] = false

        }
        if(this.state.player[3][0]==null)
        {
            this.state.show_background[3] = false
        }

        console.log(this.state.player[0]);
        console.log(this.state.player[1]);
        console.log(this.state.player[2]);
        console.log(this.state.player[3]);
            console.log("left "+this.state.rear)
            console.log("left2 "+this.state.bottom)
            console.log("left3 "+this.state.bottom2)
            console.log("left4 "+this.state.bottom3)
            console.log(this.state.top)

    }

    async draw() {
        const { deck, alreadyDrawn } = this.state;
        // console.log(deck)
        // console.log(alreadyDrawn)
        var found = false;
        if (alreadyDrawn.length == 16) {
            this.setState({ draw: null });
            return
        }
        while (1) {
            found = false;
            const n = Math.floor(16 * Math.random());
            for (var i = 0; i < alreadyDrawn.length + 1; i++) {
                if (alreadyDrawn[i] === n) {
                    found = true;
                    break;
                }
            }
            if (found === false) {
                this.state.draw = deck[n];
                alreadyDrawn[alreadyDrawn.length] = n;
                break;
            }
        }

    }

    moveDown = (item) => {
        console.log("ANIMATION1 STARTED")
        const listBottom = this.rearList.offsetTop + this.rearList.clientHeight;
        const itemTop =    - listBottom + this.topList.offsetTop;
        const { top, bottom, rear, bottom2, bottom3, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 5;
        transition.startAnim = false;
        this.setState({
            top: top.filter(x => x !== item),
            rear: [...rear, item],
            transition
        })
        setTimeout(() => this.resetState(),500);
        console.log("ANIMATION1 ENDED")
    }

    moveDown1 = (item) => { 
        console.log("ANIMATION2 STARTED")
        const listBottom = this.bottomList.offsetTop + this.bottomList.clientHeight;
        const itemTop =  - listBottom + this.topList.offsetTop;
        const { top, bottom, rear, bottom2, bottom3, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 5;
        transition.startAnim = false;
        this.setState({
            top: top.filter(x => x !== item),
            bottom: [...bottom, item],
            transition
        })
        setTimeout(() => this.resetState(), 500);
        console.log("ANIMATION2 ENDED")

    }
    moveDown2 = (item) => {
        console.log("ANIMATION3 STARTED")
        const listBottom = this.bottom2List.offsetTop + this.bottom2List.clientHeight;
        const itemTop =  - listBottom + this.topList.offsetTop;
        const { top, bottom, rear, bottom2, bottom3, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 5;
        transition.startAnim = false;
        this.setState({
            top: top.filter(x => x !== item),
            bottom2: [...bottom2, item],
            transition
        })
        setTimeout(() => this.resetState(), 500);
        console.log("ANIMATION3 ENDED")

    }
    moveDown3 = (item) => {
        console.log("ANIMATION4 STARTED")
        const listBottom = this.bottom3List.offsetTop + this.bottom3List.clientHeight;
        const itemTop =  - listBottom + this.topList.offsetTop;
        const { top, bottom, rear, bottom2, bottom3, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 5;
        transition.startAnim = false;
        this.setState({
            top: top.filter(x => x !== item),
            bottom3: [...bottom3, item],
            transition
        })
        setTimeout(() => this.resetState(), 500);
        console.log("ANIMATION4 ENDED")

    }
    moveUp1 = (item) => {
        const listBottom = this.topList.offsetTop + this.topList.clientHeight;
        const itemTop =   + listBottom;
        const { discard, bottom, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop/4;
        transition.startAnim = false;
        this.setState({
            discard: [...discard, item],
            bottom: bottom.filter(x => x !== item),
            transition,
        })
        setTimeout(() => this.resetState(), 500);
    }

    moveUp = (item) => {
        const listDownlLeft = this.topList.offsetTop + this.topList.clientHeight ;
        const itemTop =  + listDownlLeft;
        const { discard, rear, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop/4 ;
        transition.startAnim = false;
        this.setState({
            discard: [...discard, item],
            rear: rear.filter(x => x !== item),
            transition,
        })
        setTimeout(() => this.resetState(), 500);
    }
    moveUp2 = (item) => {
        const listBottom2 = this.topList.offsetTop + this.topList.clientHeight;
        const itemTop =   + listBottom2;
        const { discard ,bottom2, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 4;
        transition.startAnim = false;
        this.setState({
            discard: [...discard, item],
            bottom2: bottom2.filter(x => x !== item),
            transition,
        })
        setTimeout(() => this.resetState(), 500);
    }
    moveUp3 = (item) => {
        const listBottom3 = this.topList.offsetTop + this.topList.clientHeight;
        const itemTop =  + listBottom3;
        const { discard, bottom3, transition } = this.state;
        transition.item = item;
        transition.startTop = itemTop / 4;
        transition.startAnim = false;
        this.setState({
            discard: [...discard, item],
            bottom3: bottom3.filter(x => x !== item),
            transition,
        })
        setTimeout(() => this.resetState(), 500);
    }

    delete = (item,) => {
        const listBottom3 = this.topList.offsetTop + this.topList.clientHeight;
        const itemTop = - listBottom3;
        const { top, bottom, rear, bottom2, bottom3, mycards, transition } = this.state;
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


        this.setState({ transition }, () => {
          console.log('setState finished')
        })

    }

    usePriest = evt => { var { showButton_priest } = this.state;
        this.setState({ showButton_priest: true }) }

    usePriest_id = (evt, id, zero_one) => {

        var { use_discard_1_0, rear, bottom2, bottom3, bottom, player, mycards0, mycards1, turnNumber, showButton_priest } = this.state;
        var whichPlayer;
        this.setState({ use_discard_1_0: false })
        this.discard_animation(turnNumber%4)
        // switch (id) {
        //     case 0:
        //         whichPlayer = player[0][0];
        //         rear[1] = whichPlayer;
        //         rear[0] = card6;
        //         break;
        //     case 1:
        //         whichPlayer = player[1][0];
        //         bottom[1] = whichPlayer;
        //         bottom[0] = card6;
        //         break;
        //     case 2:
        //         whichPlayer = player[2][0];
        //         bottom2[1] = whichPlayer;
        //         bottom2[0] = card6;
        //         break;
        //     case 3:
        //         whichPlayer = player[3][0];
        //         bottom3[1] = whichPlayer;
        //         bottom3[0] = card6;
        //         break;
        // }
        alert("He has " + player[id][0].substring(14, player[id][0].length-13) + " card")
        
                if (zero_one === 0) {
                    mycards0 = null;
                } else {
                    mycards1 = null;
                }
        

        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        player[turnNumber % 4][1] = null;

        this.setState({ rear, bottom2, bottom3, bottom, player, mycards0, mycards1 })
        this.setState({ showButton_priest: false })

    }
    useKing = evt => {
        var { showButton_king, player, turnNumber } = this.state;

        {
            (() => {
                if (player[turnNumber % 4][0] === card_countess || player[turnNumber % 4][1] === card_countess) {
                    alert("You should play countess")
                } else {
                    this.setState({ showButton_king: true })
                }
            })()
        }

    }
    useKing_id = (evt, id, zero_one) => {
        var mid = []
        var { use_discard_1_0, rear, bottom2, bottom3, bottom, player, mycards0, mycards1, turnNumber, showButton_king } = this.state;
        this.setState({ use_discard_1_0: false })
        this.discard_animation(turnNumber%4)
        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        player[turnNumber % 4][1] = null;

        mid = player[turnNumber % 4][0]
        player[turnNumber % 4][0] = player[id][0]
        player[id][0] = mid

        switch (zero_one) {
            case 0:
                mycards1 = null;
                mycards0 = player[turnNumber % 4][0]
                break;
            case 1:
                mycards0 = null;
                mycards1 = player[turnNumber % 4][0]
                break;
        }
        // bottom[1]=whichPlayer;
        // bottom[0]=card6;
        // console.log(bottom);
        this.setState({ rear, bottom2, bottom3, bottom, player, mycards0, mycards1 })
        this.setState({ showButton_king: false })

    }

    useBaron = evt => { var { showButton_baron } = this.state;
        this.setState({ showButton_baron: true }) }
    useBaron_id = (evt, id, zero_one) => {
        var player1_p = 0
        var player2_p = 0
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber, showButton_baron } = this.state;
        this.setState({ use_discard_1_0: false })       
        this.discard_animation(turnNumber%4)

        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        player[turnNumber % 4][1] = null;

        switch (player[turnNumber % 4][0]) {
            case card_baron:
                player1_p = 3
                break;
            case card_countess:
                player1_p = 7
                break;
            case card_guard:
                player1_p = 1
                break;
            case card_handmaid:
                player1_p = 4
                break;
            case card_king:
                player1_p = 6
                break;
            case card_priest:
                player1_p = 2
                break;
            case card_prince:
                player1_p = 5
                break;
            case card_princess:
                player1_p = 8
                break;
        }

        switch (player[id][0]) {
            case card_baron:
                player2_p = 3
                break;
            case card_countess:
                player2_p = 7
                break;
            case card_guard:
                player2_p = 1
                break;
            case card_handmaid:
                player2_p = 4
                break;
            case card_king:
                player2_p = 6
                break;
            case card_priest:
                player2_p = 2
                break;
            case card_prince:
                player2_p = 5
                break;
            case card_princess:
                player2_p = 8
                break;
        }


                var { rear,bottom,bottom2,bottom3 } = this.state;
                if (player1_p < player2_p) {
                    player[turnNumber % 4][0] = null
                    mycards1 = null;
                    mycards0 = null;
                    alert("Player " + (turnNumber % 4 + 1) + " lost")
                    // this.lost_animation(turnNumber%4)
                } else if (player1_p > player2_p) {
                    player[id][0] = null;
                    alert("Player " + (id + 1) + " lost")
                    // this.lost_animation(id%4)

                }
                         
                if (zero_one === 0) {
                    mycards0 = null;
                } else {
                    mycards1 = null;
                }
        this.setState({rear,bottom,bottom2,bottom3})
        this.setState({ showButton_baron: false })
        this.setState({ player, mycards0, mycards1 })

    }
    useGuard = evt => { var { guard_select_card } = this.state;
        this.setState({ guard_select_card: true }) }
    useGuard_id_card = (evt, id) => {
        var { showButton_guard, guard_select_card, id_of_card } = this.state;
        id_of_card = id
        this.setState({ id_of_card })
        this.setState({ showButton_guard: true })
        this.setState({ guard_select_card: false })

    }
    useGuard_id = (evt, id, zero_one) => {
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber, showButton, id_of_card } = this.state;
        this.setState({ use_discard_1_0: false })
        this.discard_animation(turnNumber%4)
        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        player[turnNumber % 4][1] = null;


        switch (id_of_card) {
            case 0:
                
                        if (player[id][0] === card_priest) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 1:
                
                        if (player[id][0] === card_baron) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 2:
                
                        if (player[id][0] === card_handmaid) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 3:
                
                        if (player[id][0] === card_prince) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 4:
                
                        if (player[id][0] === card_king) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 5:
                
                        if (player[id][0] === card_countess) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;
            case 6:
                
                        if (player[id][0] === card_princess) {
                            player[id][0] = null
                            alert("Player " + (id + 1) + " lost")
                        } else
                            alert("You missed")
                    
                break;

        } 
                if (zero_one === 0) {
                    mycards0 = null;
                } else {
                    mycards1 = null;
                }
            
        this.setState({ showButton_guard: false })
        this.setState({ player, mycards0, mycards1 })


    }

    usePrince = evt => {
        var { showButton_prince, player, turnNumber } = this.state; 
                if (player[turnNumber % 4][0] === card_countess || player[turnNumber % 4][1] === card_countess) {
                    alert("You should play countess")
                } else {
                    this.setState({ showButton_prince: true })

                }
           




    }
    usePrince_id = (evt, id, zero_one) => {
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber } = this.state;
        this.discard_animation(turnNumber%4)
        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        player[turnNumber % 4][1] = null; {
            (() => {
                if (zero_one === 0) {
                    mycards0 = null;

                } else {
                    mycards1 = null;
                }
            })()
        }
        var new_card;
        this.draw();
        new_card = this.state.draw;
        switch (player[id][0]) {
            case card_princess:
                alert("Player " + (id + 1) + " lost")
                player[id][0] = null
                break;
            default:
                {
                    (() => {
                        if (new_card !== card6) {
                            player[id][0] = new_card
                        } else {
                            alert("Nothing happened, few cards in deck")
                        }
                    })()
                }
                break;
        } 
                if (id === turnNumber % 4 && zero_one == 0) {
                    mycards1 = player[id][0]
                } else if (id === turnNumber % 4 && zero_one == 0) {
                    mycards0 = player[id][0]
                }

           

        this.setState({ use_discard_1_0: false })
        this.setState({ showButton_prince: false })
        this.setState({ player, mycards0, mycards1, turnNumber })
    }


        useHandmaid_id = (evt,zero_one) => {
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber} = this.state;
        var switch_card
        this.discard_animation(turnNumber%4)
switch (zero_one) {
            case 0:
                switch_card = player[turnNumber % 4][0]
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                player[turnNumber % 4][1] = switch_card
                break;
            case 1:
                break;
        }



         if (zero_one === 0) {
                    mycards0 = null;
                } else {
                    mycards1 = null;
                }
        this.setState({ use_discard_1_0: false })
        this.setState({ player, mycards0, mycards1, turnNumber })

}

        usePrincess_id = (evt,zero_one) => {
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber} = this.state;
        this.discard_animation(turnNumber%4)
        mycards1 = null
        mycards0 = null
        player[turnNumber%4][0] = null
        player[turnNumber%4][1] = null
        alert("Player " + (turnNumber%4+1) + " lost")


        this.setState({ use_discard_1_0: false })
        this.setState({ player, mycards0, mycards1, turnNumber })

}


        discard_animation =(id) =>{
            switch (id)
            {
                case 0:
                    this.moveUp(this.state.rear[0])
                    console.log(this.state.rear[0])
                break;

                case 1:
                    this.moveUp1(this.state.bottom[0])
                    console.log(this.state.bottom[0])

                break;

                case 2:
                    this.moveUp2(this.state.bottom2[0])
                    console.log(this.state.bottom2[0])

                break;

                case 3:
                    this.moveUp3(this.state.bottom3[0])
                    console.log(this.state.bottom3[0])

                break;
            }
            // this.setState(this.state.bottom,this.state.rear,this.state.bottom3,this.state.bottom2)
        }
 
    discard_card = (evt, zero_one) => {
        var { use_discard_1_0, player, mycards0, mycards1, turnNumber } = this.state;
        this.setState({ use_discard_1_0: false })
        //console.log(turnNumber)
        switch (zero_one) {
            case 0:
                player[turnNumber % 4][0] = player[turnNumber % 4][1];
                break;
            case 1:
                break;
        }
        this.discard_animation(turnNumber%4)
        player[turnNumber % 4][1] = null;
        switch(player[turnNumber % 4][0])
        {
            case null:
            alert("You lost")
        }
        
                if (zero_one === 0) {
                    mycards0 = null;
                } else {
                    mycards1 = null;
                }
           
        // turnNumber=+1
        this.setState({ player, mycards0, mycards1, turnNumber })
        // this.startTurn()




    }


    render() {
        let { my_turn, show_background,use_discard_1_0,discard, top,showButton_prince, showButton_baron, showButton_guard, showButton_priest, showButton_king, guard_select_card, bottom, rear, bottom2, bottom3, mycards0, mycards1, transition } = this.state
        return (

            <div className="bcksolo">
            {!use_discard_1_0 &&(
              <button className="button_next_turn" onClick={this.startTurn}>NEXT TURN</button>
            )}
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
                        //onClick={(evt) => this.moveDown(item, evt)}
                         style={style}
                      >
                                    <img src={item} width="125"/>

                      </div>
                    )
                  })}
                </div>
            <div ref={(node) => { this.topList = node; }}>
                  {discard.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-discard ${animClass}`}
                        //onClick={(evt) => this.moveDown(item, evt)}
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
        if (mycards0==="/static/media/3-BARON.c352baaf.png") {
          return (

 <div>
 {showButton_baron && (
      <div>
      {my_turn[0] &&( 
        <button className="button_player1" onClick={evt => this.useBaron_id(evt,0,0)} >Player1</button>)}
      {my_turn[1] &&( 
        <button className="button_player2" onClick={evt => this.useBaron_id(evt,1,0)}>Player2</button>)}
        {my_turn[2] &&( 
        <button className="button_player3" onClick={evt => this.useBaron_id(evt,2,0)}>Player3</button>)}
        {my_turn[3] &&( 
        <button className="button_player4" onClick={evt => this.useBaron_id(evt,3,0)}>Player4</button>)}
      </div>
    )}

  {use_discard_1_0 &&(
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
        } else if (mycards0==="/static/media/7-COUNTESS.7b52ed75.png") {
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
        else if (mycards0==="/static/media/1-GUARD.043c90b5.png") {
          return (

             <div>
             {showButton_guard && (
      <div>
      {my_turn[0] &&( 
        <button className="button_player1" onClick={evt => this.useGuard_id(evt,0,0)} >Player1</button>)}
        {my_turn[1] &&( 
        <button className="button_player2" onClick={evt => this.useGuard_id(evt,1,0)}>Player2</button>)}
        {my_turn[2] &&( 
        <button className="button_player3" onClick={evt => this.useGuard_id(evt,2,0)}>Player3</button>)}
        {my_turn[3] &&( 
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
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.         
        </div></div>
        )
    } 
      else if (mycards0==="/static/media/4-HANDMAIDEN.b7c7dd14.png") {
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

else if (mycards0==="/static/media/6-KING.7b12aa98.png") {
          return (
             <div>
             {showButton_king && (
      <div>
      {my_turn[0] &&( 
        <button className="button_player1" onClick={evt => this.useKing_id(evt,0,0)} >Player1</button>)}
        {my_turn[1] &&( 
        <button className="button_player2" onClick={evt => this.useKing_id(evt,1,0)}>Player2</button>)}
        {my_turn[2] &&( 
        <button className="button_player3" onClick={evt => this.useKing_id(evt,2,0)}>Player3</button>)}
        {my_turn[3] &&( 
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
    else if (mycards0==="/static/media/2-PRIEST.0f58e345.png") {
          return ( 
<div>
    {showButton_priest && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,0)} >Player1</button>)}
        {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,0)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,0)}>Player3</button>)}
        {my_turn[3] &&(
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
        else if (mycards0==="/static/media/5-PRINCE.5a99cdae.png") {
          return ( <div>
            {showButton_prince && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.usePrince_id(evt,0,0)} >Player1</button>)}
      {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.usePrince_id(evt,1,0)}>Player2</button>)}
      {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.usePrince_id(evt,2,0)}>Player3</button>)}
      {my_turn[3] &&(
        <button className="button_player4" onClick={evt => this.usePrince_id(evt,3,0)}>Player4</button>)}
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
        else if (mycards0==="/static/media/8-PRINCESS.c09eb978.png") {
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
        if (mycards1==="/static/media/3-BARON.c352baaf.png") {
          return (
            <div>
            {showButton_baron && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.useBaron_id(evt,0,1)} >Player1</button>)}
        {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.useBaron_id(evt,1,1)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.useBaron_id(evt,2,1)}>Player3</button>)}
        {my_turn[3] &&(
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
        } else if (mycards1==="/static/media/7-COUNTESS.7b52ed75.png") {
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
        else if (mycards1==="/static/media/1-GUARD.043c90b5.png") {
          return (
            <div>
            {showButton_guard && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.useGuard_id(evt,0,1)} >Player1</button>)}
        {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.useGuard_id(evt,1,1)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.useGuard_id(evt,2,1)}>Player3</button>)}
        {my_turn[3] &&(
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
        Player designates another player and names a type of card. If that player's hand matches the type of card specified, that player is eliminated from the round. However, Guard cannot be named as the type of card.    
        </div></div>
        )
    } 

    else if (mycards1==="/static/media/4-HANDMAIDEN.b7c7dd14.png") {
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
else if (mycards1==="/static/media/6-KING.7b12aa98.png") {
          return (
            <div>
            {showButton_king && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.useKing_id(evt,0,1)} >Player1</button>)}
        {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.useKing_id(evt,1,1)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.useKing_id(evt,2,1)}>Player3</button>)}
        {my_turn[3] &&(
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
    else if (mycards1==="/static/media/2-PRIEST.0f58e345.png") {
              return ( 
<div>
    {showButton_priest && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.usePriest_id(evt,0,1)} >Player1</button>)}
        {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.usePriest_id(evt,1,1)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.usePriest_id(evt,2,1)}>Player3</button>)}
        {my_turn[3] &&(
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
        else if (mycards1==="/static/media/5-PRINCE.5a99cdae.png") {
          return (
            <div>
            {showButton_prince && (
      <div>
      {my_turn[0] &&(
        <button className="button_player1" onClick={evt => this.usePrince_id(evt,0,1)} >Player1</button>)}
       {my_turn[1] &&(
        <button className="button_player2" onClick={evt => this.usePrince_id(evt,1,1)}>Player2</button>)}
        {my_turn[2] &&(
        <button className="button_player3" onClick={evt => this.usePrince_id(evt,2,1)}>Player3</button>)}
        {my_turn[3] &&(
        <button className="button_player4" onClick={evt => this.usePrince_id(evt,3,1)}>Player4</button>)}
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
        else if (mycards1==="/static/media/8-PRINCESS.c09eb978.png") {
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
            {show_background[1] &&(
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
                        // onClick={(evt) => this.moveUp1(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                      </div>
                    )
                  })}
                </div>
               )}

            {show_background[0] &&(
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
                        // onClick={(evt) => this.moveUp(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125" />
                      </div>
                    )
                  })}
                </div>
                )}


            {show_background[2] &&(

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
                        // onClick={(evt) => this.moveUp2(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                                              </div>

                    )
                  })}
                </div>
                )}


            {show_background[3] &&(
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
                        // onClick={(evt) => this.moveUp3(item, evt)}
                        style={style}
                      >
                        <img src={item} width="125"/>
                      </div>
                    )
                  })}
                </div>
                )}
                </div>




              </div>


              </div>

        )
    }
}