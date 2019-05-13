import React from "react";
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = ({ message }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>{message}</Text>
      </View>
    </Page>
  </Document>
);


const HelloWorld = (props) => {
  const [message, setState] = React.useState(props.message)
  React.useEffect(_ => setState(props.message || "Hello World"), [props.message])
  return (
    <PDFViewer>
      <MyDocument message={message} />
    </PDFViewer>
  );
}
export default HelloWorld;