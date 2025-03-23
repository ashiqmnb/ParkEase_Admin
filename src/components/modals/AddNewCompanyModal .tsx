import React from "react";
import {
   Modal,
   Box,
   TextField,
   Button,
   MenuItem,
   FormControl,
   InputLabel,
   Select,
   Typography,
   CircularProgress,
} from "@mui/material";
import { FormikProps } from "formik";

interface AddNewCompanyModalProps {
   isOpen: boolean;
   isPending: boolean;
   onClose: () => void;
   formik: FormikProps<{
      name: string;
      email: string;
      password: string;
      type: string;
   }>;
}


const AddNewCompanyModal: React.FC<AddNewCompanyModalProps> = ({
   isOpen,
   isPending,
   onClose,
   formik
}) => {
   return (
      <Modal open={isOpen} onClose={onClose}>
         <Box
         sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            gap: 2,
         }}
         >
         <Typography variant="h6" fontWeight="600">
            Add New Company
         </Typography>

         <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            required
         />

         <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
         />

         <TextField
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            required
         />

         <FormControl fullWidth >
            <InputLabel>Type</InputLabel>
            <Select
               {...formik.getFieldProps("type")}
               error={formik.touched.type && Boolean(formik.errors.type)}
            >
               <MenuItem value="customer">Customer</MenuItem>
               <MenuItem value="public">Public</MenuItem>
            </Select>
         </FormControl>

         <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="outlined" color="secondary" onClick={onClose}>
               Cancel
            </Button>
            <Button
               variant="contained"
               sx={{textTransform:'none', color:'white',  width:'150px'}}
               onClick={() => formik.handleSubmit()}
            >
               {isPending ? (
                   <CircularProgress size={20} sx={{ color: 'white' }} />
               ) : (
                   'Add Company'
               )}
               
            </Button>
         </Box>
         </Box>
      </Modal>
   );
};

export default AddNewCompanyModal;
