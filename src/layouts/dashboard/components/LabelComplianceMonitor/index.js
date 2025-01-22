// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Sample placeholder data
const placeholderLabels = [
  {
    id: 1,
    name: "shipping_label_v1.txt",
    verificationStatus: "Verified",
    verificationDate: "2024-03-20",
    responsible: "John Doe",
    complianceDetails: "All requirements met",
  },
  {
    id: 2,
    name: "product_label_2024.txt",
    verificationStatus: "Pending",
    verificationDate: "2024-03-19",
    responsible: "Jane Smith",
    complianceDetails: "Under review - Missing product code",
  },
  {
    id: 3,
    name: "inventory_label_march.txt",
    verificationStatus: "Failed",
    verificationDate: "2024-03-18",
    responsible: "Mike Johnson",
    complianceDetails: "Invalid format detected",
  },
];

function LabelComplianceMonitor() {
  const [labels] = useState(placeholderLabels);

  const getStatusColor = (status) => {
    switch (status) {
      case "Verified":
        return "success";
      case "Pending":
        return "warning";
      case "Failed":
        return "error";
      default:
        return "dark";
    }
  };

  const handleManualReview = (label) => {
    console.log("Manual review for:", label.name);
  };

  const handleEdit = (label) => {
    console.log("Edit:", label.name);
  };

  const handleRefresh = (label) => {
    console.log("Refresh:", label.name);
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Label Compliance Monitor
          </MDTypography>
          <MDTypography variant="button" color="text">
            Monitoring {labels.length} labels
          </MDTypography>
        </MDBox>
        <IconButton color="info" title="Refresh All">
          <Icon>refresh</Icon>
        </IconButton>
      </MDBox>
      <MDBox p={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label Name</TableCell>
                <TableCell>Verification Status</TableCell>
                <TableCell>Verification Date</TableCell>
                <TableCell>Responsible</TableCell>
                <TableCell>
                  Compliance Details
                </TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labels.map((label) => (
                <TableRow key={label.id}>
                  <TableCell>
                    <MDBox display="flex" alignItems="center">
                      <Icon fontSize="small" sx={{ mr: 1 }}>description</Icon>
                      <MDTypography variant="button" fontWeight="medium">
                        {label.name}
                      </MDTypography>
                    </MDBox>
                  </TableCell>
                  <TableCell>
                    <MDTypography
                      variant="caption"
                      color={getStatusColor(label.verificationStatus)}
                      fontWeight="medium"
                    >
                      {label.verificationStatus}
                    </MDTypography>
                  </TableCell>
                  <TableCell>
                    <MDTypography variant="caption" color="text">
                      {label.verificationDate}
                    </MDTypography>
                  </TableCell>
                  <TableCell>
                    <MDTypography variant="caption" fontWeight="medium">
                      {label.responsible}
                    </MDTypography>
                  </TableCell>
                  <TableCell>
                    <MDTypography variant="caption" color="text">
                      {label.complianceDetails}
                    </MDTypography>
                  </TableCell>
                  <TableCell align="right">
                    <MDBox display="flex" justifyContent="flex-end">
                      <IconButton size="small" color="info" title="Manual Review" onClick={() => handleManualReview(label)} sx={{ ml: 1 }}>
                        <Icon>rate_review</Icon>
                      </IconButton>
                      <IconButton size="small" color="warning" title="Edit" onClick={() => handleEdit(label)} sx={{ ml: 1 }}>
                        <Icon>edit</Icon>
                      </IconButton>
                      <IconButton size="small" color="success" title="Refresh" onClick={() => handleRefresh(label)} sx={{ ml: 1 }}>
                        <Icon>refresh</Icon>
                      </IconButton>
                    </MDBox>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MDBox>
    </Card>
  );
}

export default LabelComplianceMonitor; 