/**
 * Created by kokikono on 2018/07/31.
 */
import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
// import 'typeface-roboto';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const styles = createStyles({
    root: {
        flexGrow: 5,
    },
    rightMenu: {
        flexGrow: 1,
    },
    centerMenu: {
        flexGrow: 1,
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        width: 'auto',
        margin: '0',
        padding: '0',
    },
});

const appTitleStyles = createStyles({
    ...styles,
});
interface AppTitleProps extends WithStyles<typeof appTitleStyles> {

}
const AppTitle = withStyles(appTitleStyles)(
    class extends React.Component<AppTitleProps> {
        render() {
            const { classes } = this.props;
            return (
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>menu</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>calendar_today</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Typography variant="headline" align="justify">カレンダー</Typography>
                    </ListItem>
                </List>
            );
        }
    },
);

const dateLineStyles = {
    ...styles,
};
interface DateLineProps extends WithStyles<typeof dateLineStyles> {

}
const DateLine = withStyles(dateLineStyles)(
    class extends React.Component<DateLineProps> {
        render() {
            const { classes } = this.props;
            return (
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button variant="outlined">今日</Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>chevron_left</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>chevron_right</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Typography variant="title">２０１８年４月</Typography>
                    </ListItem>
                </List>
            );
        }
    },
);

const rightAppBarStyles = {
    ...styles,
};
interface RightAppBarProps extends WithStyles<typeof rightAppBarStyles> {

}
const RightAppBar = withStyles(rightAppBarStyles)(
    class extends React.Component<RightAppBarProps> {
        render() {
            const { classes } = this.props;
            const AvatarIcon = require('./../assets/img/avatar.jpg');
            return (
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>search</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button variant="outlined">月<Icon>arrow_drop_down</Icon></Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>settings</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <IconButton><Icon>apps</Icon></IconButton>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Avatar alt="login avatar">
                            <img src={AvatarIcon}/>
                        </Avatar>
                    </ListItem>
                </List>
            );
        }
    },
);

const getXsOfGridItemFromBreakpoint = (width) => {
    switch (width) {
        case 'xs':
            return 3;
        case 'sm':
            return 4;
        case 'md':
            return 5;
        case 'lg':
            return 7;
        case 'xl':
            return 8;
    }
};
class Header extends React.Component<WithStyles<typeof styles>, {}> {
    public render() {
        const classes = this.props.classes;

        console.log(this.props.width);
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Grid container
                              justify="space-between">
                            <Grid item>
                                <AppTitle/>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={getXsOfGridItemFromBreakpoint(this.props.width)}>
                                    <Grid container justify="flex-start">
                                        <Grid item>
                                            <DateLine/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                            <Grid item>
                                <RightAppBar/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
const withStylesComponent = withStyles(styles)(Header);
export default withWidth()(withStylesComponent);
