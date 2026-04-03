import type { KeyFact } from "@/content/brands";

interface KeyFactsTableProps {
  facts: KeyFact[];
}

export default function KeyFactsTable({ facts }: KeyFactsTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Asosiy ma&apos;lumotlar</h2>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {facts.map((fact, index) => (
            <tr
              key={fact.label}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-5 py-3 font-medium text-gray-500 w-1/2">
                {fact.label}
              </td>
              <td className="px-5 py-3 font-semibold text-gray-800">
                {fact.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
