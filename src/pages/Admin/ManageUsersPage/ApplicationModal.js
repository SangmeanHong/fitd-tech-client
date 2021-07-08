import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './ApplicationModal.css';
import { useDispatch, useSelector } from 'react-redux';
import actionApproveApplication from '../../../redux/actions/actionApproveApplication';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export function ApplicationModal({ open, setOpen, userApplication }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalStyle] = React.useState(getModalStyle);
    const { success, loading, err } = useSelector(state => state.approveApplicationReducer);
    console.log(`success`, success)
    console.log(`loading`, loading)
    console.log(`userApplication`, userApplication)

    const handleApprove = (userId) => {
        console.log(`userId`, userId)
        dispatch(actionApproveApplication(userId));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className="inner_application">
                <h1>Application</h1>
                <div>
                    <h5>Name</h5>
                    <h3 className="name">{`${userApplication.firstName} ${userApplication.lastName}`}</h3>
                </div>
                <div>
                    <h5>Email</h5>
                    <h3 className="email">{userApplication.email}</h3>
                </div>
                <div>
                    <h5>Linkedin</h5>
                    <h3 className="linkedin">{userApplication.linkedin}</h3>
                </div>
                <div>
                    <h5>Number of Previous Students</h5>
                    <h3 className="numOfPeople">{userApplication.numOfPeople}</h3>
                </div>
                <div>
                    <h5>Hours</h5>
                    <h3 className="hoursPerWeek">{userApplication.hoursPerWeek} h</h3>
                </div>
                <div>
                    <h5>Wage</h5>
                    <h3 className="wage">$ {userApplication.wage}</h3>
                </div>
                <div>
                    <h5 >Expertise Area</h5>
                    {
                        userApplication.expertiseArea && userApplication.expertiseArea.length > 0 && userApplication.expertiseArea.map(data => <h3 className="expertiseArea">{data.label}</h3>)
                    }
                </div>
                <div>
                    <h5>Checked</h5>
                    {
                        userApplication.provideChecked && userApplication.provideChecked.length > 0 && userApplication.provideChecked.map(data => <h3 className="provideChecked">{data.label}</h3>)
                    }
                </div>
                <div>
                    <h5>Certifications</h5>
                    <h3 className="certification">{userApplication.certification}</h3>
                </div>
                <div className="approveBtn_outter">
                    <div className="appoveBtn" onClick={() => handleApprove(userApplication.user)}>Approve</div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}