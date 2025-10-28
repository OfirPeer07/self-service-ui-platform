export type Request = {
  id: string;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  description: string;
  createdAt: string;
};

export async function fetchRequests(): Promise<Request[]> {
  // Replace with real API call later
  return [
    {
      id: '1',
      title: 'Create Staging Environment',
      status: 'pending',
      description: 'Provision new staging env for team A',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Add Secrets to Namespace',
      status: 'approved',
      description: 'Secrets update request for prod namespace',
      createdAt: new Date().toISOString()
    }
  ];
}
