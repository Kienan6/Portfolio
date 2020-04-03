import React, {useState, useEffect} from 'react';
import ContentArea from './contentArea';
export default function Carousel(props) {
    const [selected, setSelected] = useState(0);
    const [previous, setPrevious] = useState(-1);
    const [direction, setDirection] = useState('left');
    const [disabled, setDisabled] = useState({
        left: true,
        right: false,
    });
    useEffect(() => {
        if(selected == React.Children.count(props.children)-1){
            console.log('test');
            setDisabled({left: false, right: true});
        }
        else if(selected == 0){
            setDisabled({right: false, left: true});
        } else {
                setDisabled({right: false, left: false});
        }
    },[selected]);
    const modifiedChildren = () => {
        return React.Children.map(props.children, (child,i) => {
            //selected comes to the front
            if(i == previous) {//previous slides out
                var c = "";
                if(direction=="right"){
                    c="content-area slide-out-right";
                } else {
                    c="content-area slide-out-left";
                }
                return React.cloneElement(child, {
                    class: c,
                });
            }
            else if(i == selected){//change this to selector
                return React.cloneElement(child, {
                    class: "content-area slide-in",
                });
            } else {
                if(i > selected) {
                    return React.cloneElement(child, {
                        class: "content-area waiting-right",
                    });
                } else{
                    return React.cloneElement(child, {
                        class: "content-area waiting-left",
                    });
                }
            }
        })
    }
    //from https://davidwalsh.name/javascript-debounce-function
    const debounce = (func, wait, immediate) =>{
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }
    const handleButton = movement => e => {
        var count = React.Children.count(props.children);
        console.log(count);
        if(movement=='left') {
            setDirection('right');
            setPrevious(selected);
            setSelected(s => ((((s-1) % count)+count)%count));
        } else {
            setDirection('left');
            setPrevious(selected);
            setSelected(s => (s+1) % count);
        }
    }
    return (
        <div>
        <div className="carousel-main">
            {modifiedChildren()}
        </div>
        <button className="button-arrow left" disabled={disabled.left} onClick={debounce(handleButton('left'),250)}></button>
        <button className="button-arrow right" disabled={disabled.right} onClick={debounce(handleButton('right'),250)}></button>
        </div>
    );
}