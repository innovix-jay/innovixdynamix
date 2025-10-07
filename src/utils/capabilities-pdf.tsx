import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  subsectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 4,
  },
  text: {
    marginBottom: 4,
    lineHeight: 1.4,
    fontSize: 9.5,
  },
  listItem: {
    marginLeft: 12,
    marginBottom: 3,
    fontSize: 9.5,
    lineHeight: 1.4,
  },
  indent: {
    marginLeft: 20,
    marginBottom: 3,
    fontSize: 9,
  },
  checkItem: {
    marginBottom: 3,
    fontSize: 9.5,
  },
  table: {
    marginTop: 6,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingVertical: 5,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
  },
  tableCell: {
    fontSize: 8.5,
    paddingHorizontal: 4,
  },
  tableCellLeft: {
    width: '35%',
    fontSize: 8.5,
    paddingHorizontal: 4,
  },
  tableCellRight: {
    width: '65%',
    fontSize: 8.5,
    paddingHorizontal: 4,
  },
  emphasis: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
});

const CapabilitiesPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.companyName}>INNOVIX DYNAMIX</Text>
        <Text style={styles.tagline}>AI Training & Enablement for Government IT and Cybersecurity Teams</Text>
        <Text style={styles.contactInfo}>Innovative Vision X LLC | Operating as Innovix Dynamix</Text>
        <Text style={styles.contactInfo}>953 Bentstation Ln #303, Lake Mary, FL 32746</Text>
        <Text style={styles.contactInfo}>Jay Cadmus, CEO | jay.cadmus@innovixdynamix.com | innovixdynamix.com</Text>
      </View>

      {/* Company Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company Profile</Text>
        <Text style={styles.text}>Business Structure: Florida Limited Liability Company (LLC)</Text>
        <Text style={styles.text}>Socioeconomic Status: [Small Business / Service-Disabled Veteran-Owned Small Business if applicable]</Text>
        <Text style={styles.text}>Year Established: 2025</Text>
        <Text style={styles.text}>GSA Schedule: Not yet registered</Text>
        <Text style={styles.text}>SAM.gov Registration: In process</Text>
      </View>

      {/* Core Competencies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Competencies</Text>
        
        <Text style={styles.subsectionTitle}>AI Workforce Enablement & Training</Text>
        <Text style={styles.text}>
          Scalable, role-based AI training that equips government IT and cybersecurity personnel with practical 
          prompt engineering skills, safe-use guardrails, and repeatable AI workflows aligned to mission requirements.
        </Text>

        <Text style={styles.subsectionTitle}>Federal-Grade Security & Data Sovereignty</Text>
        <Text style={styles.text}>
          US-only data infrastructure with federal security standards (NIST SP 800-53, FISMA principles, 
          HIPAA-equivalent safeguards, FedRAMP baseline controls). All data stored exclusively on US servers 
          with zero foreign access or transfers.
        </Text>

        <Text style={styles.subsectionTitle}>Rapid Deployment & Low Agency Burden</Text>
        <Text style={styles.text}>
          Hosted training portal requires no customer infrastructure. Provisioning completes within 1-3 weeks 
          of award. No software installation, no new systems, no IT overhead for government clients.
        </Text>

        <Text style={styles.subsectionTitle}>Standards Alignment</Text>
        <Text style={styles.listItem}>• OMB M-24-10: AI governance, inventory, impact assessment, oversight, and testing alignment</Text>
        <Text style={styles.listItem}>• NIST AI RMF: Govern, Map, Measure, Manage framework integration</Text>
        <Text style={styles.listItem}>• Section 508: Full accessibility compliance (captions, transcripts, keyboard navigation, VPAT available)</Text>
      </View>

      {/* NAICS Codes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>NAICS Codes</Text>
        <Text style={styles.subsectionTitle}>Primary:</Text>
        <Text style={styles.listItem}>• 611430 – Professional and Management Development Training</Text>
        <Text style={styles.listItem}>• 541512 – Computer Systems Design Services</Text>
        <Text style={styles.listItem}>• 541519 – Other Computer Related Services</Text>
        <Text style={styles.subsectionTitle}>Secondary:</Text>
        <Text style={styles.listItem}>• 541611 – Administrative Management and General Management Consulting Services</Text>
        <Text style={styles.listItem}>• 541690 – Other Scientific and Technical Consulting Services</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Differentiators */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Differentiators</Text>

        <Text style={styles.subsectionTitle}>1. US-Only Data Storage – Zero Foreign Exposure</Text>
        <Text style={styles.text}>Unlike competitors using international cloud regions or offshore support:</Text>
        <Text style={styles.listItem}>• All data stored exclusively in continental US data centers</Text>
        <Text style={styles.listItem}>• Zero foreign subcontractors or offshore teams</Text>
        <Text style={styles.listItem}>• No international data transfers – ever</Text>
        <Text style={styles.listItem}>• Protected under US jurisdiction only, eliminating foreign government access risks</Text>

        <Text style={styles.subsectionTitle}>2. Federal-Grade Security Without Federal Pricing</Text>
        <Text style={styles.text}>Security controls meeting:</Text>
        <Text style={styles.listItem}>• NIST SP 800-53 (Security and Privacy Controls)</Text>
        <Text style={styles.listItem}>• FISMA compliance principles</Text>
        <Text style={styles.listItem}>• HIPAA Security Rule technical safeguards</Text>
        <Text style={styles.listItem}>• FedRAMP baseline requirements</Text>
        <Text style={styles.listItem}>• SOC 2 Type II certified infrastructure</Text>
        <Text style={styles.text}>
          Your data receives protection equivalent to Controlled Unclassified Information (CUI) and 
          Sensitive But Unclassified (SBU) standards.
        </Text>

        <Text style={styles.subsectionTitle}>3. Fast Deployment – Minimal Government Burden</Text>
        <Text style={styles.listItem}>• Week 0-1: Kickoff, account provisioning</Text>
        <Text style={styles.listItem}>• Week 1-2: 80%+ user completion of baseline training</Text>
        <Text style={styles.listItem}>• Week 3-4: Teams applying AI in daily work</Text>
        <Text style={styles.listItem}>• Ongoing: Monthly metrics, quarterly content updates</Text>
        <Text style={styles.text}>
          No infrastructure deployment, no software licensing, no maintenance burden on government IT.
        </Text>

        <Text style={styles.subsectionTitle}>4. Practical, Role-Based Training</Text>
        <Text style={styles.text}>Not generic AI theory—job-specific training for:</Text>
        <Text style={styles.listItem}>• Cybersecurity Analysts: Threat triage, log analysis, incident summarization</Text>
        <Text style={styles.listItem}>• Project Managers: Requirements drafting, status reporting, risk documentation</Text>
        <Text style={styles.listItem}>• IT Support: Ticket summarization, KB article generation, SOP creation</Text>
        <Text style={styles.listItem}>• Software Engineers: Code structure prompts, debugging assistance</Text>
        <Text style={styles.text}>
          Each role receives targeted prompt patterns and use-case examples relevant to their daily work.
        </Text>

        <Text style={styles.subsectionTitle}>5. Built for Teaming & Subcontracting</Text>
        <Text style={styles.text}>Designed to integrate seamlessly as a subcontractor or teaming partner on:</Text>
        <Text style={styles.listItem}>• Professional staffing contracts (IT, cybersecurity FTEs)</Text>
        <Text style={styles.listItem}>• Mission support services</Text>
        <Text style={styles.listItem}>• Training and workforce development contracts</Text>
        <Text style={styles.listItem}>• IT modernization initiatives</Text>
        <Text style={styles.text}>
          Value-add differentiator: Makes prime contractors more competitive by offering "AI-trained FTEs" 
          as a standard capability.
        </Text>
      </View>

      {/* Past Performance */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past Performance & Partnerships</Text>
        <Text style={styles.text}>
          Current Positioning: Innovix Dynamix is actively building past performance through strategic teaming 
          agreements with established government contractors. Our AI training capability serves as a competitive 
          differentiator for prime contractors pursuing IT staffing and mission support contracts.
        </Text>
        <Text style={styles.text}>
          Partnership Model: We integrate as a subcontractor providing AI training and enablement services as 
          a value-added component of larger contract vehicles. This positions prime contractors to offer 
          "AI-trained FTEs" as a standard capability.
        </Text>
        <Text style={styles.text}>
          References Available Upon Request: Teaming partners and current engagement references can be provided 
          during proposal evaluation.
        </Text>
      </View>

      {/* Target Markets */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Target Markets</Text>
        
        <Text style={styles.subsectionTitle}>Federal Agencies</Text>
        <Text style={styles.listItem}>• Department of Defense (DoD) - IT and cybersecurity modernization</Text>
        <Text style={styles.listItem}>• Civilian agencies requiring AI workforce enablement</Text>
        <Text style={styles.listItem}>• Intelligence Community (IC) support contractors</Text>

        <Text style={styles.subsectionTitle}>State & Local Government</Text>
        <Text style={styles.listItem}>• State IT departments and cybersecurity programs</Text>
        <Text style={styles.listItem}>• Local government technology modernization initiatives</Text>

        <Text style={styles.subsectionTitle}>Contract Vehicles</Text>
        <Text style={styles.listItem}>• Professional staffing augmentation contracts</Text>
        <Text style={styles.listItem}>• IT services and solutions contracts</Text>
        <Text style={styles.listItem}>• Training and workforce development contracts</Text>
        <Text style={styles.listItem}>• Small business set-asides and 8(a) programs</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Why Innovix Dynamix */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Innovix Dynamix</Text>
        <Text style={styles.checkItem}>✓ Zero Infrastructure Burden – Fully hosted, nothing to deploy</Text>
        <Text style={styles.checkItem}>✓ US-Only Data Storage – No foreign exposure, enhanced security posture</Text>
        <Text style={styles.checkItem}>✓ Federal Security Standards – NIST, FISMA, HIPAA-equivalent controls</Text>
        <Text style={styles.checkItem}>✓ Rapid Deployment – 1-3 weeks from award to operational</Text>
        <Text style={styles.checkItem}>✓ Role-Based Training – Practical, job-specific AI patterns</Text>
        <Text style={styles.checkItem}>✓ Standards Aligned – OMB M-24-10, NIST AI RMF, Section 508</Text>
        <Text style={styles.checkItem}>✓ Teaming-Friendly – Built to integrate as subcontractor value-add</Text>
        <Text style={styles.checkItem}>✓ Transparent Metrics – Simple, program-friendly reporting</Text>
      </View>

      {/* Technical Capabilities Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Capabilities Summary</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCellLeft, styles.emphasis]}>Capability</Text>
            <Text style={[styles.tableCellRight, styles.emphasis]}>Description</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Training Delivery</Text>
            <Text style={styles.tableCellRight}>Video-based, self-paced modules with live examples</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Access Control</Text>
            <Text style={styles.tableCellRight}>Named-user accounts, MFA support, role-based permissions</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Security</Text>
            <Text style={styles.tableCellRight}>TLS 1.3 encryption, AES-256 at rest, US-only infrastructure</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Accessibility</Text>
            <Text style={styles.tableCellRight}>Section 508 compliant, VPAT available upon request</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Scalability</Text>
            <Text style={styles.tableCellRight}>Supports 10-1000+ users per contract</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Reporting</Text>
            <Text style={styles.tableCellRight}>Monthly metrics, quarterly roll-ups, configurable by task order</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Integration</Text>
            <Text style={styles.tableCellRight}>Portal link or iframe integration with customer systems</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLeft}>Content Updates</Text>
            <Text style={styles.tableCellRight}>Quarterly refreshes included, ad-hoc updates as needed</Text>
          </View>
        </View>
      </View>

      {/* Contact & Next Steps */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact & Next Steps</Text>
        <Text style={styles.text}>Ready to discuss teaming opportunities or respond to your RFP?</Text>
        <Text style={[styles.text, { marginTop: 6 }]}>Jay Cadmus, CEO</Text>
        <Text style={styles.text}>Innovative Vision X LLC (DBA Innovix Dynamix)</Text>
        <Text style={styles.text}>Email: jay.cadmus@innovixdynamix.com</Text>
        <Text style={styles.text}>Website: https://innovixdynamix.com</Text>
        <Text style={styles.text}>Address: 953 Bentstation Ln #303, Lake Mary, FL 32746</Text>
        <Text style={[styles.text, { marginTop: 6, fontStyle: 'italic' }]}>
          We respond to teaming requests within 24-48 hours.
        </Text>
      </View>
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
  link.download = 'Innovix-Dynamix-Capabilities-Statement.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
