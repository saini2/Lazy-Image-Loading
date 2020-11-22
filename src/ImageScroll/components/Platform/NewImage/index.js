import React from 'react';
import style from './NewImage.module.scss';
import ImageContainer from '../../../shared/ImageContainer/ImageContainer';
import tree from '../../../public/tree.png';
import first from '../../../public/1.jpg';
import sec from '../../../public/2.jpeg';
import fourth from '../../../public/3.jpg';
import fifth from '../../../public/4.jpeg';
import sixth from '../../../public/5.jpg';
import seventh from '../../../public/6.jpeg';
import eigth from '../../../public/7.jpeg';
import nigth from '../../../public/8.jpeg';
import tenth from '../../../public/9.jpeg';
import third from '../../../public/10.jpeg';

export default class NewImage extends React.Component{
    render(){
        return(
            <div className={style.container}>
                <div className = {style.header}>Lazy Loading Images</div>
                <div key={'1'} className = {style.wrapper}>
                  <ImageContainer
                    src={tree}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'2'} className = {style.wrapper}
                
                >
                  <ImageContainer
                    src={first}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'3'} className = {style.wrapper}>
                  <ImageContainer
                    src={sec}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'4'} className = {style.wrapper}>
                  <ImageContainer
                    src={fourth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'5'} className = {style.wrapper}>
                  <ImageContainer
                    src={third}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'6'} className = {style.wrapper}>
                  <ImageContainer
                    src={fourth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'7'} className = {style.wrapper}>
                  <ImageContainer
                    src={fifth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'8'} className = {style.wrapper}>
                  <ImageContainer
                    src={sixth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'9'} className = {style.wrapper}>
                  <ImageContainer
                    src={seventh}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'10'} className = {style.wrapper}>
                  <ImageContainer
                    src={eigth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'11'} className = {style.wrapper}>
                  <ImageContainer
                    src={nigth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
                <div key={'12'} className = {style.wrapper}>
                  <ImageContainer
                    src={tenth}
                    height={100}
                    width={100}
                    alt={'check'}
                  />
                </div>
          </div>
        );
    }
}