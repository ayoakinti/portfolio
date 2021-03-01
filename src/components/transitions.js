import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
// class Transition extends React.PureComponent {
function Transition(props) {
  const timeout = 500
  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  }
  //   render(props) {
  // const { children, location } = this.props
  return (
    <TransitionGroup>
      <ReactTransition
        key={props.location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {props.children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
  //   }
}
export default Transition
