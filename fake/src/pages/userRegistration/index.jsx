
import React, {Component} from 'react';
import {Button, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonDataTable from "../../components/common/table";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import CommonButton from "../../components/common/button";
import Link from '@mui/material/Link';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomSnackBar from "../../components/common/snackBar";


class RegisterUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                rate_Id: '',
                daily_Rate: '',
                free_Km_Day: '',
                free_Km_Month: '',
                monthly_rate: '',
                extra_Km_Price: '',

            }, verification: null, alert: false, message: '', severity: '',
            data: [],
            loaded: false,
            columns: [
                {
                    field: "rate_Id",
                    headerName: "Rate ID",
                    width: 228,
                },

                {
                    field: "daily_Rate",
                    headerName: "Daily Rate",
                    width: 228,
                },

                {
                    field: "free_Km_Day",
                    headerName: "Free Km For a Day",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "free_Km_Month",
                    headerName: "Free Km For a Month",
                    width: 228,
                },

                {
                    field: "monthly_rate",
                    headerName: "Monthly Rate",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "extra_Km_Price",
                    headerName: "Price Per Extra Km",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "action",
                    headerName: "Action",
                    width: 228,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton onClick={async () => {
                                       /* await this.updateRates(params.row);*/
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                      /*  await this.deleteRates(params.row.rate_Id);*/
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
      }
    
    handleSubmit = async () => {
        console.log(this.state.formData);
    //     if (this.state.verification === null) {
    //         this.setState({
    //             alert: true,
    //             message: "Please Upload NIC Card Or Driving License Card Photo to Verify",
    //             severity: 'error'
    //         })
    //         return;
    //     }
    //     let formData = this.state.formData
    //     let data = new FormData();
    //     data.append("customer",JSON.stringify(formData));
    //     data.append("file",this.state.verification)

    //    let res = await UserService.postCustomer(data)
    //     console.log(data)
    //     if (res.status === 201){
    //         this.setState({
    //             alert: true,
    //             message: "Registration Done",
    //             severity: 'success'
    //         })
    //     }else {
    //         this.setState({
    //             alert: true,
    //             message: res.message,
    //             severity: 'error'
    //         })
    //     }
    }

    handleFile(e) {
        let verification = e.target.files[0]
        this.setState({
            verification: verification
        })
    }

   /* handleChange = (event) => {
        let id1 = event.target.name;
        switch (id1) {
            case "id":
                const id = event.target.value;
                this.setState(Object.assign(this.state.formData, {id: id}));
                // this.setState({ userId });
                break;

            case "name":
                const name = event.target.value;
                this.setState(Object.assign(this.state.formData, {name: name}));
                break;

            case "nic_Number":
                const nic_Number = event.target.value;
                this.setState(Object.assign(this.state.formData, {nic_Number: nic_Number}));
                break;

            case "driving_License_Number":
                const driving_License_Number = event.target.value;
                this.setState(Object.assign(this.state.formData, {driving_License_Number: driving_License_Number}));
                break;

            case "address":
                const address = event.target.value;
                this.setState(Object.assign(this.state.formData, {address: address}));
                break;

            case "mobile_Number":
                const mobile_Number = event.target.value;
                this.setState(Object.assign(this.state.formData, {mobile_Number: mobile_Number}));
                break;

            case "email":
                const email = event.target.value;
                this.setState(Object.assign(this.state.formData, {email: email}));
                break;

            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;

            default:
                break;
        }
    };
*/

    render() {
        const {classes} = this.props;
        return (<>
          <Grid container direction={'row'}  justifyContent={'center'} 
                  className={'bg-white '}>
                
                    <Grid container direction={"row"} justifyContent={"center"}>
                    
                        <Grid>
                            <Typography variant={"h3"} textAlign={"center"}>
                                User Registration
                            </Typography>
                        </Grid>

                        <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={"flex justify-center p-10"}
                    >
                      
                            <Grid container direction={'row'} justifyContent={"center"} item gap={3} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="User ID"
                                    onChange={this.handleChange}
                                    name="id"
                                    value={this.state.formData.id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="Name"
                                    onChange={this.handleChange}
                                    name="name"
                                    value={this.state.formData.name}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="NIC"
                                    onChange={this.handleChange}
                                    name="nic_Number"
                                    value={this.state.formData.nic_Number}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="Driving License No."
                                    onChange={this.handleChange}
                                    name="driving_License_Number"
                                    value={this.state.formData.driving_License_Number}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                            </Grid>
                            <Grid container direction={'column'} justifyContent={"center"}  item gap={3} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="Address"
                                    onChange={this.handleChange}
                                    name="address"
                                    value={this.state.formData.address}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="Mobile No."
                                    onChange={this.handleChange}
                                    name="mobile_Number"
                                    value={this.state.formData.mobile_Number}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.formData.email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["This field is required", "Email is not valid"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    type={'password'}
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-96 text-red-500"]}
                                />
                        
                                </Grid>
                               
                            

                    </ValidatorForm>
                        <Grid container direction={'row'} justifyContent={"center"} item gap={3} >
                            <CommonButton
                                size="medium"
                                variant="contained"
                                label='Cancel'
                                type="Cancel"
                                className="text-white bg-red-500  font-bold w-48 tracking-wide"
                                style={{backgroundColor: 'red', }}
                            />
                            <CommonButton
                                size="medium"
                                variant="contained"
                                label='Create'
                                type="submit"
                                className="text-white bg-blue-500 font-bold w-48 tracking-wide"
                                style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', }}
                            />

                        </Grid>

                        <CommonDataTable
                            columns={this.state.columns}
                            rows={this.state.data}
                            rowsPerPageOptions={10}
                            pageSize={10}
                        //  checkboxSelection={true}
                        />

                        </Grid>

                    </Grid>

            <CustomSnackBar
                open={this.state.alert}
                onClose={() => {
                    this.setState({alert: false})
                }}
                message={this.state.message}
                autoHideDuration={3000}
                severity={this.state.severity}
                variant={'filled'}
            />

        </>);
    }
}

export default withStyles(styleSheet)(RegisterUser);