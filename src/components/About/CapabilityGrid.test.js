import { fireEvent, render, screen } from '@testing-library/react';
import CapabilityGrid from './CapabilityGrid';

const item = {
  icon: <span>AI</span>,
  title: 'Agentic AI',
  detail: 'LangGraph · Tools',
  eyebrow: 'Controlled autonomy',
  summary: 'A bounded and observable agent workflow.',
  sections: [
    { title: 'Design', items: ['Typed state', 'Conditional routing'] },
    { title: 'Reliability', items: ['Retries', 'Abstention'] },
  ],
  evidence: 'Applied in a production retrieval workflow.',
};

test('opens capability details from an accessible card button', () => {
  render(<CapabilityGrid items={[item]} />);

  fireEvent.click(
    screen.getByRole('button', { name: /view agentic ai details/i })
  );

  expect(
    screen.getByRole('dialog', { name: /agentic ai/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/bounded and observable/i)).toBeInTheDocument();
  expect(screen.getByText('Conditional routing')).toBeInTheDocument();
  expect(screen.getByText(/production retrieval workflow/i)).toBeInTheDocument();
});
