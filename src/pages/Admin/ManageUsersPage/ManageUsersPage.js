import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ManageUsersPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionIcon from '@material-ui/icons/Description';
import DeleteIcon from '@material-ui/icons/Delete';
import actionGetUsers from '../../../redux/actions/actionGetUsers';
import { ApplicationModal } from './ApplicationModal';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function ManageUsersPage() {
    const { users, applications, loading, err } = useSelector(state => state.getUsersReducer);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userApplication, setUserApplication] = useState({});

    useEffect(() => {
        dispatch(actionGetUsers());
    }, [])
    console.log(`users`, users)
    console.log(`applications`, applications)

    const checkRole = (roleNum) => {
        switch (roleNum) {
            case 0:
                return "User";
            case 1:
                return "Coach";
            case 2:
                return "Admin";
            case 3:
                return "Coach Pending";
            default:
                return '';
        }
    }

    const handleDocs = (id) => {
        console.log('클릭됨', id)
        const filteredApplication = applications.filter((data) => data.user === id)[0];
        setUserApplication(filteredApplication)
        setOpen(true);
    }

    return (
        <>
            <h1 className="manageUserHeader">Manage FITD Users</h1>
            {
                users && users.length > 0 &&
                <TableContainer className="manageUserTable" component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell align="right">Photo</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Role</TableCell>
                                <TableCell align="right">Modify</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow className={index % 2 === 0 ? "even" : "odd"} key={index}>
                                    <TableCell align="right">{user.image ? <img className="manageUser_userimg" src={user.image} alt="userface" /> : 'No image'}</TableCell>
                                    <TableCell align="right" component="th" scope="row">
                                        {`${user.firstName} ${user.lastName}`}
                                    </TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    {/* <TableCell align="right">{checkRole(user.role)}</TableCell> */}
                                    <TableCell align="right">
                                        {checkRole(user.role)}{user.role === 3 && <DescriptionIcon className="manageUserDesc" onClick={() => handleDocs(user._id)} />}
                                    </TableCell>
                                    <TableCell align="right"><DeleteIcon className="manageUserDeleteIcon" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            <ApplicationModal open={open} setOpen={setOpen} userApplication={userApplication} />
        </>
    );
}







// <TableContainer className="manageUserTable" component={Paper}>
//     {console.log(users)}
//     <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//             <TableRow >
//                 <TableCell align="right">Name</TableCell>
//                 <TableCell align="right">Email</TableCell>
//                 <TableCell align="right">Linkedin</TableCell>
//                 <TableCell align="right">Hours&nbsp;(week)</TableCell>
//                 <TableCell align="right">certification</TableCell>
//                 <TableCell align="right">wage&nbsp;($)</TableCell>
//                 <TableCell align="right">Modify</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {/* {console.log(users)}
//                             {users.map((user, index) => (
//                                 <TableRow style={index % 2 === 0 ? { backgroundColor: '#f1b175' } : null} key={index}>
//                                     <TableCell component="th" scope="row">
//                                         {`${user.firstName} ${user.lastName}`}
//                                     </TableCell>
//                                     <TableCell align="right">{user.email}</TableCell>
//                                     <TableCell align="right">{user.linkedIn}</TableCell>
//                                     <TableCell align="right">{user.hoursPerWeek} h</TableCell>
//                                     <TableCell align="right"> {
//                                         user.expertiseArea.map((area) => {
//                                             return (
//                                                 area.label
//                                             )
//                                         })
//                                     }</TableCell>
//                                     <TableCell align="right">$ {user.wage}</TableCell>
//                                     <TableCell align="right">수정할부분</TableCell>
//                                 </TableRow>
//                             ))} */}
//         </TableBody>
//     </Table>
// </TableContainer>