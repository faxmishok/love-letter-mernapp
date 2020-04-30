import React, { Component } from "react";
import {Launcher} from 'react-chat-window'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './solo.css';

export default class Solo extends Component {
          state = {
            top: ['1', '2'],
            bottom: ['3'],
            rear: ['ss'],
            transition: {
              item: null,
              startTop: 0,
              startAnim: true,
            }
          }

          moveDown = (item, evt) => {
            const listBottom = this.bottomList.offsetTop + this.bottomList.clientHeight;
            const itemTop = (evt.target.offsetTop - listBottom) + this.topList.offsetTop;
            const { top, bottom,rear, transition } = this.state;
            transition.item = item;
            transition.startTop = itemTop;
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
            const { top, bottom,rear, transition } = this.state;
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
            const listBottom = this.topList.offsetTop + this.topList.clientHeight;
            const itemTop = evt.target.offsetTop - listBottom;
            const { top, bottom,rear, transition } = this.state;
            transition.item = item;
            transition.startTop = itemTop;
            transition.startAnim = false;
            this.setState({
              top: [...top, item],
              rear: rear.filter(x => x !== item),
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
            let { top, bottom,rear, transition } = this.state
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
                        {item}
                      </div>
                    )
                  })}
                </div>
              <div className="width1">

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
                        {item}
                      </div>
                    )
                  })}
                </div>
                </div>


              <div className="width2">
                  <div ref={(node) => { this.rearList = node; }}>
                {rear.map((item) => {
                    const startTop = transition.item === item ? transition.startTop : 0;
                    const animClass = transition.startAnim ? 'item-force-move' : '';
                    const style = {
                      transform: `translateY(${startTop}px)`,
                    }
                    return (
                      <div 
                        className={`item item-bottom ${animClass}`}
                        onClick={(evt) => this.moveDownLeft(item, evt)}
                        style={style}
                      >
                        {item}
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