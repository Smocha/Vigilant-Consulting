type CisaKevEntry = {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  dueDate: string;
  knownRansomwareCampaignUse: string;
  notes: string;
};

type CisaKevResponse = {
  title?: string;
  catalogVersion?: string;
  dateReleased?: string;
  count?: number;
  vulnerabilities?: CisaKevEntry[];
};

const CISA_KEV_URL =
  'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';

export async function GET() {
  try {
    const response = await fetch(CISA_KEV_URL, {
      next: {
        revalidate: 3600,
      },
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Vigilant-Consulting-Website/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`CISA KEV request failed: ${response.status}`);
    }

    const data = (await response.json()) as CisaKevResponse;

    const vulnerabilities = [...(data.vulnerabilities ?? [])]
      .sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      )
      .slice(0, 5);

    return Response.json({
      source: 'CISA Known Exploited Vulnerabilities Catalog',
      catalogVersion: data.catalogVersion,
      dateReleased: data.dateReleased,
      vulnerabilities,
    });
  } catch (error) {
    console.error('Unable to retrieve CISA KEV catalog:', error);

    return Response.json(
      {
        error: 'Unable to retrieve vulnerability intelligence.',
        vulnerabilities: [],
      },
      {
        status: 502,
      }
    );
  }
}
