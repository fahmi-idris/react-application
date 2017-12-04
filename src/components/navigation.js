import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import AccountBalance from 'material-ui-icons/AccountBalance';
import AccessTime from 'material-ui-icons/AccessTime';
import EventSeat from 'material-ui-icons/EventSeat';
import Today from 'material-ui-icons/Today';
import Info from 'material-ui-icons/Info';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    marginTop: '30px',
    background: '#eeeeee',
    position: 'fixed',
    bottom: 0
  },
  button: {
    paddingBottom: '0px'
  }
};

class Navigation extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <Link to='/'>
          <BottomNavigationButton className={classes.button} showLabel={false} label="Home" value="home" icon={<AccountBalance />} />
        </Link>
        <Link to='/event/category/5a16cea013fb5875000019d1'>
          <BottomNavigationButton className={classes.button} showLabel={false} label="Event" value="event" icon={<Today />} />
        </Link>
        <Link to='/event/category/5a16ce9b13fb5875000019d0'>
          <BottomNavigationButton className={classes.button} showLabel={false} label="Meetup" value="meetup" icon={<AccessTime />} />
        </Link>
        <Link to='/event/category/5a16ce8b13fb5875000019cf'>
          <BottomNavigationButton className={classes.button} showLabel={false} label="Seminar" value="seminar" icon={<EventSeat />} />
        </Link>
        <Link to='/about'>
          <BottomNavigationButton className={classes.button} showLabel={false} label="About" value="about" icon={<Info />} />
        </Link>
      </BottomNavigation>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);