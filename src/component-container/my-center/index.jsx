
import React, { Component } from "react";
import { Popover, NavBar, Icon, Button, List } from 'antd-mobile';
import { Link, withRouter } from 'react-router-dom';
import style from './myCenter.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionMethod from '../../action/index.js';
class mycenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.getRecord = this.getRecord.bind(this)
    }
    componentDidMount() {
        this.state.userName = window.localStorage.getItem('userName')
        console.log('11', this.props);
        // this.getRecord();
    }

    componentDidUpdate() {
        let {
            tempRecord,
            isHaveDate
        } = this.props.record;
        if (tempRecord && tempRecord.length <= 0 && isHaveDate === '1') {
            this.getRecord()
        }
    }

    getRecord() {
        let {
            async_getRecord
        } = this.props.actionMethod;
        // let {
        //     id: habitId
        // } = this.props.match.params;
        // let {
        //     tempRecord
        // } = this.props.record;
        let userId = window.localStorage.getItem("userId");
        // let lastRecord = tempRecord.length > 0 ? tempRecord[tempRecord.length - 1]._id : ''

        async_getRecord({
            userId,
            // habitId,
            // lastRecord,
            type: 'getAllRecord'
        })
    }

    habitList() {
        let showList = this.props.habit.habitInfo.map((item, index) => {
            return (
                <List.Item
                    key={index}
                    className="per-habit-item"
                    arrow=""
                    thumb={<div className="iconfont icon-marketing_fill"></div>}
                    multipleLine
                    onClick={() => { }}
                >
                    <Link to={`/record/${item.habit._id}/`}>
                        <div className="per-habit-name">{item.habit.habitName}</div>
                        <List.Item.Brief className="per-habit-brief">坚持了{item.habit.userCount}次</List.Item.Brief>
                    </Link>
                </List.Item>
            )
        })
        return showList;
    }

    render() {
        let {
            tempRecord
        } = this.props.record;
        console.log(tempRecord);
        return (
            <div className={`${style.wrap}`}
            style={{position:'relative'}}
             >
                
                <div className={`${style.header}`}>
                    <div className={`${style.picWrap}`}>
                        <div className={`${style.pic}`}>
                            <img src="https://t1.picb.cc/uploads/2019/01/17/V6Zc6N.png" />
                        </div>
                        {/* <span className={`${style.gender} ${style.gender_nv} iconfont icon-nvxing`}></span> */}
                        {/* <span className={`${style.gender} ${style.gender_nan} iconfont icon-nan`}></span> */}
                    </div>

                    <div className={`${style.attention}`}>
                        {/* <Link className={`${style.attention_count}`} to="/my/inserest/inserest"><strong>20</strong><span>关注</span></Link>
                        <Link className={`${style.attention_count}`} to="/my/inserest/fans"><strong>20</strong><span>粉丝</span></Link> */}
                        <p>Hello：<span>{ this.state.userName }</span></p>
                        <p></p>
                    </div>
                </div>
                <p className={`${style.introduce}`}>简单介绍自己</p>

                <div className={`${style.otherHabit} otherHabit`}>
                    <h3 className={`${style.title}`}>我的习惯记录</h3>
                    <List>
                        {this.habitList()}
                    </List>
                </div>
                <div className={`${style.message} myCenter`}>
                    <h3 className={`${style.title}`}>通知</h3>
                    <div className={`${style.content}`}>

                        <List className="">
                            {
                                tempRecord.map((item, index) => {
                                    return (
                                        (item.comment.length) == 0 ? '' : (
                                            item.comment.map((item1, index1) => {
                                                return (
                                                    <List.Item
                                                        key={index1}
                                                        thumb={<div className={`${style.msg_userPic}`}>
                                                            <img src="https://t1.picb.cc/uploads/2019/01/17/V6Zc6N.png" alt="" />
                                                        </div>}
                                                        multipleLine
                                                    >
                                                        <Link to={`/record/${item.habit._id}/`} className={`${style.msg_right}`}>
                                                            <div className={`${style.msg_item}`}>
                                                                <div className={`${style.msg_user}`}>
                                                                    <span>{item.user.userName}</span>
                                                                    <span className={`${style.msg_type}`}>评论了你的记录</span>
                                                                </div>
                                                                <p className={`${style.msg_body}`}>{item1.content}</p>
                                                                <List.Item.Brief style={{ fontSize: "12px", margin: "0" }} >{item1.time}</List.Item.Brief>
                                                            </div>
                                                        </Link>
                                                    </List.Item>
                                                )
                                            })
                                        )
                                    )
                                })
                            }
                            {/* <List.Item
                                thumb={<div className={`${style.msg_userPic}`}>
                                    <Link to="">
                                        <img src="http://img2.imgtn.bdimg.com/it/u=1416157376,2250476580&fm=27&gp=0.jpg" alt="" />
                                    </Link>
                                </div>}
                                multipleLine
                            >
                                <Link to="/habit/book/0001" className={`${style.msg_right}`}>
                                    <div className={`${style.msg_item}`}>
                                        <div className={`${style.msg_user}`}>
                                            <span>张三</span>
                                            <span className={`${style.msg_type}`}>评论了你的记录</span>
                                        </div>
                                        <p className={`${style.msg_body}`}>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
                                        <List.Item.Brief style={{ fontSize: "12px", margin: "0" }} >12:00</List.Item.Brief>
                                    </div>
                                    <div className={`${style.msg_record}`}>
                                        <img src="http://img2.imgtn.bdimg.com/it/u=2421375767,909320505&fm=27&gp=0.jpg" />
                                    </div>

                                </Link>
                            </List.Item> */}
                            {/* <List.Item
                                className=""
                                thumb={<div className={`${style.msg_userPic}`}>
                                    <Link to="">
                                        <img src="http://img2.imgtn.bdimg.com/it/u=1416157376,2250476580&fm=27&gp=0.jpg" alt="" />
                                    </Link>
                                </div>}
                                multipleLine
                            >
                                <Link to="/habit/book/0001" className={`${style.msg_right}`}>
                                    <div className={`${style.msg_item}`}>
                                        <div className={`${style.msg_user}`}>
                                            <span>张三</span>
                                            <span className={`${style.msg_type}`}>点赞了你的记录</span>
                                        </div>
                                        <List.Item.Brief style={{ fontSize: "12px", margin: "0" }} >12:00</List.Item.Brief>
                                    </div>
                                    <div className={`${style.msg_record}`}>
                                        <img src="http://img2.imgtn.bdimg.com/it/u=2421375767,909320505&fm=27&gp=0.jpg" />
                                    </div>

                                </Link>
                            </List.Item> */}
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    let {
        userinfo,
        habit,
        record
    } = state
    return { userinfo, habit, record };
}
const mapDispatchToProps = (dispath) => {
    return {
        actionMethod: bindActionCreators(actionMethod, dispath)
    }
}
const my_center = withRouter(mycenter)
const MyCenter = connect(
    mapStateToProps,
    mapDispatchToProps
)(my_center)
export { MyCenter }