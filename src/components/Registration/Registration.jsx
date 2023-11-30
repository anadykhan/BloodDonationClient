import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useGetDistricts, useGetUpazials } from "../../hooks/Hooks"

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']


const Registration = () => {
    const { data: districtsData, isLoading: districtsLoading } = useGetDistricts()
    const { data: upazilasData, isLoading: upazilasLoading } = useGetUpazials()

    if(districtsLoading || upazilasLoading){
        return <h1>Loading...</h1>
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const name = form.name.value
        const url = form.url.value
        const group = form.groups.value
        const district = form.districts.value
        const upazila = form.upazilas.value
        const password = form.password.value
        const confirm = form.confirm.value
        const admin = true
        const status = true

        const newFrom = {
            email, name, url, group, district, upazila, password, confirm, admin, status
        }

        console.log(newFrom)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-[30rem]">
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="url"
                    label="Image URL"
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
                    <InputLabel>Distict</InputLabel>
                    <Select
                        label="Districts"
                        name="districts"
                    >
                        {districtsData.data.map((district) => (
                            <MenuItem key={district.name} value={district.name}>
                                {district.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Upaliza</InputLabel>
                    <Select
                        label="Upazilas"
                        name="upazilas"
                    >
                        {upazilasData.data.map((upaliza) => (
                            <MenuItem key={upaliza.name} value={upaliza.name}>
                                {upaliza.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    
                />
                <TextField
                    name="confirm"
                    label="Confirm Password"
                    type="password"
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
export default Registration