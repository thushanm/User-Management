
import { Container, TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";

export const Inputs = () => {
    const [uName, setUName] = useState<string>("");
    const [suName, setSUName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [address, setAddress] = useState<string>("");


    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("User Submit Successful");
    };

    return (
        <Container maxWidth="sm">
            <h2>Add User</h2>
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <TextField
                    label="First Name"
                    variant="outlined"
                    value={uName}
                    onChange={(e) => setUName(e.target.value)}
                    required
                />
                <TextField
                    label="Second Name"
                    variant="outlined"
                    value={suName}
                    onChange={(e) => setSUName(e.target.value)}
                    required
                />
                <TextField
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <TextField
                    select
                    label="Gender"
                    variant="outlined"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
                <TextField
                    label="Address"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Save User
                </Button>
            </form>
        </Container>
    );
};
