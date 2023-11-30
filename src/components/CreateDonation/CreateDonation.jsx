import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { postRequest, useGetDistricts, useGetUpazials, useGetUsers } from "../../hooks/Hooks"
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { DatePicker, LocalizationProvider, MobileDatePicker, TimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import axios from "axios"

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const CreateDonation = () => {
    const { user, loading } = useContext(AuthContext)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)

    const { data: districtsData, isLoading: districtsLoading } = useGetDistricts()
    const { data: upazilasData, isLoading: upazilasLoading } = useGetUpazials()
    const { data: usersData, isLoading: usersLoading } = useGetUsers()

    if (upazilasLoading || districtsLoading || usersLoading || loading) {
        return "Loading"
    }

    const userData = usersData.data.find(data => data.email == user.email)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const requesterEmail = form.requesterEmail.value;
        const requesterName = form.requesterName.value;
        const recipientEmail = form.recipientEmail.value;
        const recipientName = form.recipientName.value;
        const groups = form.groups.value;
        const recipientDistricts = form.recipientDistricts.value;
        const recipientUpazilas = form.recipientUpazilas.value;
        const hospital = form.hospital.value;
        const fullAddress = form.fullAddress.value;
        const donationDate = `${date?.$D}/${date?.$M + 1}/${date?.$y}`// Directly read the value from the form
        const donationTime = `${time?.$H}:${time?.$m}:${time?.$s}` // Directly read the value from the form
        const request = form.request.value;
        const donationStatus = 'pending'

        const newRequest = {
            requesterName,
            requesterEmail,
            recipientEmail,
            recipientName,
            groups,
            recipientDistricts,
            recipientUpazilas,
            hospital,
            fullAddress,
            donationDate,
            donationTime,
            request,
            donationStatus
        }

        console.log(newRequest);

        postRequest(newRequest)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-[30rem]">
                <TextField
                    name="requesterEmail"
                    label="Requester email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    defaultValue={userData.email}
                    disabled
                />
                <TextField
                    name="requesterName"
                    label="Requester name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    defaultValue={userData.name}
                    disabled
                />
                <TextField
                    name="recipientEmail"
                    label="Recipient email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="recipientName"
                    label="Recipient name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Blood Group</InputLabel>
                    <Select
                        label="Blood Group"
                        name="groups"
                    >
                        {bloodGroups.map((group) => (
                            <MenuItem key={group} value={group}>
                                {group}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Recipient Distict</InputLabel>
                    <Select
                        label="Recipient District"
                        name="recipientDistricts"
                    >
                        {districtsData.data.map((district) => (
                            <MenuItem key={district.name} value={district.name}>
                                {district.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Recipient Upaliza</InputLabel>
                    <Select
                        label="Recipient Upazila"
                        name="recipientUpazilas"
                    >
                        {upazilasData.data.map((upaliza) => (
                            <MenuItem key={upaliza.name} value={upaliza.name}>
                                {upaliza.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    name="hospital"
                    label="Hospital Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"

                />
                <TextField
                    name="fullAddress"
                    label="Full Address"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                {/* Date Picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        name="donationDate"
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                    />
                </LocalizationProvider>

                {/* Time Picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['TimePicker']} >
                        <TimePicker
                            label="Pick time"
                            name="donationTime"
                            value={time}
                            onChange={(newTime) => setTime(newTime)}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <TextField
                    name="request"
                    label="Request for something"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default CreateDonation