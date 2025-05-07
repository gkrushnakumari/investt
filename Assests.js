import React from 'react';

function Assets() {
  const assets = [
    { type: 'Real Estate', description: 'Property investments for long-term returns' },
    { type: 'Stocks', description: 'Equity investments in companies' },
    { type: 'Bonds', description: 'Fixed-income debt securities' },
    { type: 'Mutual Funds', description: 'Pooled investment vehicles' },
  ];

  return (
    <div>
      <h2>Available Assets</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            <strong>{asset.type}</strong>: {asset.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assets;