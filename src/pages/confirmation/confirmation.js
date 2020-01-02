import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';


const Confirmation = ({ form }) => {
    const styles = {
        table : { width: '70%', margin: 'auto' }
    }
    return (
        <div className="confirmation">
            <h2>Confirmed</h2>
            <h3>Thank you for your application. Below are the details:</h3>
            
            <Table style={styles.table}>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            First Name
                        </TableCell>
                        <TableCell>{form.firstName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Last Name
                        </TableCell>
                        <TableCell>{form.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Email
                        </TableCell>
                        <TableCell>{form.email}</TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        
        </div>)

}

const mapStatetoProps = (state) => {
    return { form: state.formReducer }
}

export default connect(mapStatetoProps)(Confirmation);