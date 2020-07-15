import React, { Component } from 'react';
import classes from './NetworkError.css'

export default function (ComposedComponent) {
    class NetworkDetector extends Component {
        state = {
            isDisconnected: false
        }

        componentDidMount() {
            this.handleConnectionChange();
            window.addEventListener('online', this.handleConnectionChange);
            window.addEventListener('offline', this.handleConnectionChange);
        }

        componentWillUnmount() {
            window.removeEventListener('online', this.handleConnectionChange);
            window.removeEventListener('offline', this.handleConnectionChange);
        }


        handleConnectionChange = () => {
            const condition = navigator.onLine ? 'online' : 'offline';

            if (condition === 'online') {
                const webPing = setInterval(
                    () => {
                        fetch('http://localhost:8081', {
                            mode: 'no-cors',
                        })
                            .then(() => {
                                this.setState({ isDisconnected: false }, () => {
                                    return clearInterval(webPing)
                                });
                            }).catch(() => this.setState({ isDisconnected: true }))
                    }, 2000);
                return;
            }

            return this.setState({ isDisconnected: true });
        }

        render() {
            const { isDisconnected } = this.state;
            return (
                <div>
                    {isDisconnected && (<div className={classes.internetError}>
                        <p>Internet connection lost</p>
                    </div>)
                    }
                    <ComposedComponent {...this.state} />
                </div>
            );
        }
    }

    return NetworkDetector;
}