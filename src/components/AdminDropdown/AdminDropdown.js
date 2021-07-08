import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDropdown.css'

export const AdminDropdown = () => {
    return (
        <div className="dropdown">
            <DropdownButton id="dropdown" title="Admin">
                <Link to="/manageusers">Manage User</Link>
                <Link to="/managecontents">Manage Content</Link>
                <Link to="/action-3">Something else</Link>
            </DropdownButton>
        </div>
    )
}
