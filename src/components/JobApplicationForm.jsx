import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DevTool } from '@hookform/devtools';
import {
    Container,
    TextField,
    Button,
    MenuItem,
    Typography,
    Grid,
    Box,
    Select,
    InputLabel,
    FormControl,
    FormHelperText,
    Divider,
} from '@mui/material';

const JobApplicationForm = () => {

    const { handleSubmit, control, reset, register, formState: { errors, isValid, isSubmitSuccessful } } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            cityState: "",
            linkedin: "",
            github: "",
            instituteName: "",
        },
        mode: "onChange"
    });


    const onSubmit = (data) => {
        const file = data.resumeUpload[0];
        console.log(data, "data");
        if (file) {
            console.log("File Details:", file);
            console.log("Name:", file.name);
            console.log("Size:", file.size);
            console.log("Type:", file.type);
        } else {
            console.log("No file uploaded.");
        }
    };

    const onErrors = (error) => {
        console.log(error, "error")
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    return (
        <Container maxWidth="sm" sx={{
            mt: 5
        }}>
            <Box sx={{
                maxWidth: '600px',
                margin: '20px auto',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 1,
                backgroundColor: '#fff',
            }}>
                <Box
                    sx={{
                        height: '10px',
                        backgroundColor: '#4CAF50',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        marginBottom: "10px"
                    }}
                />
                <Typography variant="h4" align="center" gutterBottom>
                    Join Our Team at Softmind Infotech Pvt Ltd!🚀
                </Typography>
                {/* Divider */}
                <Divider sx={{ borderBottomWidth: 2, borderColor: '#4CAF50', marginBottom: '15px' }} />

                <form onSubmit={handleSubmit(onSubmit, onErrors)} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                name="fullName"
                                control={control}
                                defaultValue=""
                                label="Full Name"
                                fullWidth
                                {...register("fullName", {
                                    required: {
                                        value: true,
                                        message: "Full name is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: "Full Name must contain only letters"
                                    }
                                })}
                                helperText={errors.fullName?.message}
                                error={Boolean(errors.fullName)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                control={control}
                                defaultValue=""
                                label="Email"
                                fullWidth
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid Email"
                                    }
                                })}
                                helperText={errors.email?.message}
                                error={Boolean(errors.email)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="phone"
                                control={control}
                                defaultValue=""
                                label="Phone Number"
                                fullWidth
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone Number is required"
                                    },
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Phone number must contain exactly 10 digits.'
                                    }
                                })}
                                helperText={errors.phone?.message}
                                error={Boolean(errors.phone)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
                                <CloudUploadIcon fontSize="large" color="primary" />
                                <Typography variant="h6" component="span" ml={1}>
                                    Upload Resume
                                </Typography>
                            </Box>
                            <Typography>Upload Resume</Typography>
                            <input
                                style={{
                                    border: "1px solid gray",
                                    width: "94%",
                                    padding: "12px",
                                }}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                {...register("resumeUpload", {
                                    required: "Resume upload is required",
                                })}
                            />
                            <Typography color="error">
                                {errors.resumeUpload?.message}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="cityState"
                                control={control}
                                defaultValue=""
                                label="City & State"
                                fullWidth
                                {...register("cityState", {
                                    required: {
                                        value: true,
                                        message: "City & State is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'City & State name must contain only letters'
                                    }
                                })}
                                helperText={errors.cityState?.message}
                                error={Boolean(errors.cityState)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth error={Boolean(errors.gender)}>
                                <InputLabel id="gender-label">Select Your Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    name="gender"
                                    label="Select Your Gender"
                                    defaultValue=""
                                    {...register("gender", {
                                        required: {
                                            value: true,
                                            message: "Gender is required"
                                        }
                                    })}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                                {/* <FormHelperText>Please select your gender</FormHelperText> */}
                                {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="linkedin"
                                control={control}
                                defaultValue=""
                                label="LinkedIn Profile URL"
                                fullWidth
                                type="url"
                                {...register("linkedin", {
                                    // disabled: watch("linkedin") === "",
                                    required: {
                                        value: true,
                                        message: "LinkedIn Profile URL is required"
                                    }
                                })}
                                helperText={errors.linkedin?.message}
                                error={Boolean(errors.linkedin)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="github"
                                control={control}
                                defaultValue=""
                                label="GitHub Profile URL"
                                fullWidth
                                type="url"
                                {...register("github", {
                                    // disabled: watch("github") === "",
                                    required: {
                                        value: true,
                                        message: "GitHub Profile URL is required"
                                    }
                                })}
                                helperText={errors.github?.message}
                                error={Boolean(errors.github)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="instituteName"
                                control={control}
                                defaultValue=""
                                label="Institute Name"
                                fullWidth
                                {...register("instituteName", {
                                    required: {
                                        value: true,
                                        message: "Institute Name is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Institute name must contain only letters'
                                    }
                                })}
                                helperText={errors.instituteName?.message}
                                error={Boolean(errors.instituteName)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="courseStream"
                                control={control}
                                defaultValue=""
                                label="Course & Stream"
                                fullWidth
                                {...register("courseStream", {
                                    required: {
                                        value: true,
                                        message: "Course & Stream is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Course & Stream must contain only letters'
                                    }
                                })}
                                helperText={errors.courseStream?.message}
                                error={Boolean(errors.courseStream)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth error={Boolean(errors.currentYear)}>
                                <InputLabel id="current-year">Select Current Year</InputLabel>
                                <Select
                                    name="currentYear"
                                    label="Select Current Year"
                                    defaultValue=""
                                    {...register("currentYear", {
                                        required: {
                                            value: true,
                                            message: "Current Year is required"
                                        }
                                    })}
                                >
                                    <MenuItem value="first year">First Year</MenuItem>
                                    <MenuItem value="second year">Second Year</MenuItem>
                                    <MenuItem value="third year">Third Year</MenuItem>
                                    <MenuItem value="final year">Final Year</MenuItem>
                                    <MenuItem value="pass out">Pass Out</MenuItem>
                                </Select>
                                {/* <FormHelperText>Please select your current year</FormHelperText> */}
                                {/* {errors.currentYear && <FormHelperText>{errors.currentYear.message}</FormHelperText>} */}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained"
                                // disabled={!isValid}
                                color="primary" type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <DevTool control={control} />
            </Box>
        </Container>
    );
};

export default JobApplicationForm;
