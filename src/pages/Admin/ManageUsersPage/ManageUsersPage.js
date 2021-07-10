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
import actionApproveApplication from '../../../redux/actions/actionApproveApplication';
import LoadingSpinner from '../../../components/LoadingSpinner';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    // table: {
    //     minWidth: 650,
    // },
});

export function ManageUsersPage() {
    const { users, applications, loading, err } = useSelector(state => state.getUsersReducer);
    const { success, loading: approveApplicationLoading, err: approveApplicationError } = useSelector(state => state.approveApplicationReducer);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userApplication, setUserApplication] = useState({});
    const [selectedUser, setSelectedUser] = useState('');
    useEffect(() => {
        dispatch(actionGetUsers());
    }, [dispatch, success])

    const handleApprove = (userId) => {
        console.log(`userId`, userId)
        dispatch(actionApproveApplication(userId));
        setOpen(false);
        dispatch(actionGetUsers());
    };

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

    const createFullName = (firstName, lastName) => {
        if (!firstName || !lastName) return '';
        return `${firstName} ${lastName}`
    }

    const handleDocs = (id, role) => {
        setSelectedUser(id);
        const filteredApplication = applications.filter((data) => data.user === id)[0];
        filteredApplication["role"] = role;
        setUserApplication(filteredApplication)
        setOpen(true);
    }


    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const dataLimit = 5;
    const indexOfLast = page * dataLimit;
    const indexOfFirst = indexOfLast - dataLimit;
    const handlePageChange = (event, value) => {
        setPage(value);
    }
    useEffect(() => {
        if (users) {
            // setPageData(createdReviews.slice(0, 4) as reviewType[]); // 0 2 , 1 3, 2 4           0 2 , 2 4, 4 6 
            // 우선 먼저 sort 를 해서 순서를 바꿔주고 slice 로 data를 나눠준다.
            setPageData(users.slice(indexOfFirst, indexOfLast)); // 0 2 , 1 3, 2 4           0 2 , 2 4, 4 6
        }
    }, [indexOfFirst, indexOfLast, users])

    // ****************************************

    return (
        <div className="manageUserPage">
            <h1 className="manageUserHeader">Manage FITD Users</h1>
            {
                pageData && pageData.length > 0 &&
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
                            {pageData.map((user, index) => (
                                <TableRow className={index % 2 === 0 ? "even" : "odd"} key={index}>
                                    <TableCell align="right">{user.image ? <img className="manageUser_userimg" src={user.image} alt="userface" /> : 'No image'}</TableCell>
                                    <TableCell align="right" component="th" scope="row">
                                        {createFullName(user.firstName, user.lastName)}
                                    </TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">

                                        {
                                            selectedUser === user._id && approveApplicationLoading ?
                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <LoadingSpinner />
                                                </div>
                                                : (

                                                    user.role === 3 || user.role === 1 ? (
                                                        <>
                                                            <span>{checkRole(user.role)}</span>
                                                            <DescriptionIcon className="manageUserDesc" onClick={() => handleDocs(user._id, user.role)} />
                                                        </>
                                                    ) : (
                                                        <span>{checkRole(user.role)}</span>
                                                    )
                                                )
                                        }
                                    </TableCell>
                                    <TableCell align="right"><DeleteIcon className="manageUserDeleteIcon" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px auto' }}>
                        <Pagination count={Math.ceil(users.length / dataLimit)} color="secondary" onChange={handlePageChange} page={page} />
                    </div>
                </TableContainer>
            }
            <ApplicationModal open={open} setOpen={setOpen} userApplication={userApplication} handleApprove={handleApprove} />
        </div>
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