import { Box } from '@mui/material'
import CompaniesTable from '../components/tables/CompaniesTable'

export const CompaniesContainer = () => {

	const companies = [
		{
		  name: "ABC Corp",
		  email: "contact@abccorp.com",
		  type: "customer",
		  status: "active",
		  addedDate: "01/15/2023"
		},
		{
		  name: "XYZ Ltd",
		  email: "info@xyzltd.com",
		  type: "public",
		  status: "inactive",
		  addedDate: "03/10/2023"
		},
		{
		  name: "Tech Solutions",
		  email: "support@techsolutions.com",
		  type: "customer",
		  status: "active",
		  addedDate: "05/22/2023"
		},
		{
		  name: "Global Ventures",
		  email: "hello@globalventures.com",
		  type: "public",
		  status: "inactive",
		  addedDate: "07/08/2023"
		},
		{
		  name: "NextGen Innovations",
		  email: "contact@nextgen.com",
		  type: "customer",
		  status: "active",
		  addedDate: "08/30/2023"
		},
		{
		  name: "Future Tech",
		  email: "info@futuretech.com",
		  type: "public",
		  status: "active",
		  addedDate: "09/15/2023"
		},
		{
		  name: "MegaCorp",
		  email: "support@megacorp.com",
		  type: "customer",
		  status: "inactive",
		  addedDate: "10/05/2023"
		},
		{
		  name: "Innovate Ltd",
		  email: "hello@innovate.com",
		  type: "public",
		  status: "active",
		  addedDate: "11/20/2023"
		},
		{
		  name: "Smart Solutions",
		  email: "contact@smartsolutions.com",
		  type: "customer",
		  status: "inactive",
		  addedDate: "12/01/2023"
		},
		{
		  name: "PrimeTech",
		  email: "info@primetech.com",
		  type: "public",
		  status: "active",
		  addedDate: "12/18/2023"
		}
	 ];

	return (
	  	<Box>
	  	   <CompaniesTable
				companies={companies}
			/>
	  	</Box>
	)
}
