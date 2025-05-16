// MyDocument.js
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Fragment } from "react";

const PAGE_VERTICAL_MARGIN = 25;
const PAGE_HORIZONTAL_MARGIN = 30;
const BULLET = "•";

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    width: "100%",
    height: "100%",
    border: "3px solid #cad2da", // Optional border
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  page: {
    paddingTop: PAGE_VERTICAL_MARGIN,
    paddingBottom: PAGE_VERTICAL_MARGIN,
    paddingHorizontal: PAGE_HORIZONTAL_MARGIN,
    fontFamily: "Times-Roman",
    fontSize: 10,
    lineHeight: 1.3,
    color: "#000000",
    gap: 10,
  },

  headerContainer: {
    textAlign: "center",
    marginBottom: 2,
  },
  name: {
    fontFamily: "Times-Bold",
    fontSize: 32,
    marginBottom: 26,
  },
  contactInfoContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    fontSize: 10,
    fontFamily: "Times-Roman",
    color: "#000000",
  },
  contactItem: {
    // For non-link text items in the contact line
    marginHorizontal: 1,
    textDecoration: "none", // Ensure no default decoration
  },
  contactLink: {
    // Specific style for links
    fontFamily: "Times-Bold",
    marginHorizontal: 1,
    textDecoration: "underline",
    color: "#1F4E79", // Standard blue for links
  },
  contactSeparator: {
    fontFamily: "Times-Bold",
    marginHorizontal: 1,
    color: "#333333", // Slightly lighter separator
  },

  section: {
    flexDirection: "col",
    gap: 7,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
    textTransform: "uppercase",
    paddingBottom: 3,
    marginBottom: -2,
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
  },

  description: {
    fontStyle: "italic",
    fontSize: 12,
  },

  none: {
    display: "none",
    overflow: "hidden",
  },
});

function MyDocument({ personalInfo, education, skills, project, experience }) {
  return (
    <PDFViewer style={styles.viewer}>
      <Document title="My Cv">
        <Page size="A4" style={styles.page}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>{personalInfo.fullName || ""}</Text>
            <View style={styles.contactInfoContainer}>
              {" "}
              {personalInfo.phoneNumber && (
                <Text style={styles.contactItem}>
                  {personalInfo.phoneNumber}
                </Text>
              )}
              {personalInfo.phone && personalInfo.email && (
                <Text style={styles.contactSeparator}> | </Text>
              )}
              {personalInfo.email && (
                <Text style={styles.contactLink}>{personalInfo.email}</Text>
              )}
              {personalInfo.gitHubUrl && (
                <Text style={styles.contactLink}>{personalInfo.gitHubUrl}</Text>
              )}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((item, index) => (
              <View
                key={index}
                style={item.display == "none" ? styles.none : ""}
              >
                <View style={styles.flex}>
                  <Text>{`${item.university} - ${item.degree}`}</Text>
                  <Text>{item.date}</Text>
                </View>
                <Text style={styles.description}>{item.field}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {experience.map((item, index) => (
              <View
                key={index}
                style={item.display == "none" ? styles.none : ""}
              >
                <View style={styles.flex}>
                  <Text>{item.experience}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {project.map((item, index) => (
              <View
                key={index}
                style={item.display == "none" ? styles.none : ""}
              >
                <View style={styles.flex}>
                  <Text>{item.project}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            {skills.map((item, index) => (
              <View
                key={index}
                style={item.display == "none" ? styles.none : ""}
              >
                <View style={styles.flex}>
                  <Text>{item.category}</Text>
                </View>
                <Text style={styles.description}>{item.skills}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
