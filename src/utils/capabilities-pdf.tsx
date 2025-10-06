import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    marginBottom: 6,
    lineHeight: 1.5,
  },
  listItem: {
    marginLeft: 15,
    marginBottom: 4,
  },
  note: {
    fontSize: 9,
    fontStyle: 'italic',
    marginTop: 20,
    paddingTop: 15,
    borderTop: '1 solid #ccc',
  },
  contact: {
    marginBottom: 4,
  },
});

const CapabilitiesPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Innovix — Capabilities Statement</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Do</Text>
        <Text style={styles.text}>
          Innovix delivers AI Training & Enablement that helps teams adopt AI safely in day-to-day work. 
          We provide a hosted, standards-aligned approach so organizations can move fast without increasing risk. 
          Suitable for both government and private sector programs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Capabilities</Text>
        <Text style={styles.listItem}>• Hosted training experience (no new infrastructure required to begin)</Text>
        <Text style={styles.listItem}>• Practical AI patterns and guidance for daily work</Text>
        <Text style={styles.listItem}>• Monthly adoption/completion reporting and simple Compliance Score snapshot</Text>
        <Text style={styles.listItem}>• Quarterly content refreshes to keep examples current</Text>
        <Text style={styles.listItem}>• Usage-only analytics (no operational/customer data ingested)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Standards Alignment</Text>
        <Text style={styles.text}>
          OMB M-24-10: governance, inventory, impact assessment, oversight, testing (alignment in training and guardrails)
        </Text>
        <Text style={styles.text}>
          NIST AI RMF: Govern • Map • Measure • Manage (training maps to these functions)
        </Text>
        <Text style={[styles.text, { fontSize: 9, fontStyle: 'italic', marginTop: 8 }]}>
          Note: "Aligned to" means capability and readiness; no certification or prior federal deployment is implied.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How Engagements Work</Text>
        <Text style={styles.text}>
          Discovery → scope confirmation → hosted setup → onboarding → monthly reporting and quarterly refreshes. 
          Innovix participates in kickoff and keeps materials current over time.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company & Contact</Text>
        <Text style={styles.contact}>Innovix LLC</Text>
        <Text style={styles.contact}>Contact: Jay Cadmus, CEO</Text>
        <Text style={styles.contact}>Email: jay.cadmus@innovixdynamix.com</Text>
        <Text style={styles.contact}>Phone: (555) 123-4567</Text>
        <Text style={styles.contact}>Website: innovixdynamix.com</Text>
        <Text style={styles.contact}>Location: City, State</Text>
      </View>

      <Text style={styles.note}>
        Note: Innovix represents capability and readiness for the services described. Claims are expressed as 
        alignment to OMB M-24-10 and NIST AI RMF; no certification or prior federal deployment is implied.
      </Text>
    </Page>
  </Document>
);

export const generateCapabilitiesPDF = async () => {
  const blob = await pdf(<CapabilitiesPDF />).toBlob();
  return blob;
};

export const downloadCapabilitiesPDF = async () => {
  const blob = await generateCapabilitiesPDF();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Innovix-Capabilities-Statement.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
