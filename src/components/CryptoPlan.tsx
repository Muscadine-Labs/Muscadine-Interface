
const CryptoPlan = () => {
  return (
    <div className="min-h-screen bg-marble py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-stone-900 font-serif mb-4">
              Crypto Guide
            </h1>
            <p className="text-stone-600 text-lg">
              Strategic roadmap for cryptocurrency investments and portfolio management
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* System Setup & Access Guide */}
              <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">System Setup & Access Guide</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  This comprehensive guide provides clear, step-by-step instructions for setting up your Start9 server, Bitcoin node, Lightning network, Electrum, and related tools. Designed for easy following by you and family members to achieve full infrastructure setup and management.
                </p>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Start9 Server & Node Access</h3>
                    <p className="text-stone-600 mb-3">Your Start9 Server runs Bitcoin, Electrum, Lightning (LND/CLN), and BTCPay. Access it locally or remotely.</p>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li><strong>Tor Dashboard (remote):</strong> https://toraddress.onion/</li>
                      <li><strong>Local Network:</strong> https://two-words.local</li>
                      <li><strong>Local IP:</strong> 192.000.0.00</li>
                      <li><strong>Electrum RPC Port:</strong> 50001</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Credentials & Security */}
              <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Credentials & Security</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <p className="text-red-800 font-semibold">⚠️ Store These Credentials Securely</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">System Access</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li><strong>Start9 Admin Password:</strong> password</li>
                      <li><strong>Application Username:</strong> Username</li>
                      <li><strong>Application Password:</strong> password</li>
                      <li><strong>Device Logins:</strong> password</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Hardware Security</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li><strong>Ledger Device PIN:</strong> PIN</li>
                      <li><strong>Coldcard PIN:</strong> PIN</li>
                      <li><strong>Anti-Phishing Phrase:</strong> phrase-phase</li>
                      <li><strong>Safe Box Combination:</strong> PIN</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Master/Child Key Strategy */}
              <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Master/Child Key Strategy (BIP-85)</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Implement a hierarchical key structure for enhanced security and family management. Each family member gets their own derived wallet while maintaining centralized control.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Key Structure</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li>• Family Master Seed → generates child master keys</li>
                      <li>• Assign unique index per family member (1=Dad, 2=Mom, 3=You)</li>
                      <li>• Each person derives their wallet with SeedSigner/Coldcard</li>
                      <li>• Maintain clear diagram: Master → Child → Wallet indices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Emergency Recovery</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li>• Lost child seed: use parent key + index → re-derive → move to new index</li>
                      <li>• Lost Family Master: generate new master → re-derive children → migrate funds</li>
                      <li>• After re-derivation: treat old key as compromised</li>
                      <li>• Always move funds to fresh child index</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Security Checklist */}
              <section className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Quick Security Checklist</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Storage & Backup</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li>✓ Store seed phrases on metal or paper, never digital</li>
                      <li>✓ Maintain 2+ backups of master seed in different locations</li>
                      <li>✓ Label devices & SD cards clearly (e.g., "Bob Coldcard Q")</li>
                      <li>✓ Keep firmware/software updated regularly</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Maintenance & Testing</h3>
                    <ul className="space-y-2 text-sm text-stone-700">
                      <li>✓ Run annual restore drills from backups</li>
                      <li>✓ Test hardware powering on periodically</li>
                      <li>✓ Verify wallet fingerprints match devices</li>
                      <li>✓ Keep hardware in good condition</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Device & Software Setup */}
              <section className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-xl p-6 border border-stone-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Device & Software Setup</h2>
                
                <div className="space-y-6">
                  {/* SeedSigner */}
                  <div className="bg-white rounded-lg p-6 border border-stone-200">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-4">1. SeedSigner (DIY Bitcoin Signer)</h3>
                    <p className="text-stone-600 mb-4">Creates child keys from master keys and signs Bitcoin transactions securely.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Resources</h4>
                        <ul className="space-y-1 text-sm text-stone-600">
                          <li>• Website: <a href="https://seedsigner.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">seedsigner.com</a></li>
                          <li>• Store: <a href="https://btc-hardware-solutions.square.site/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">BTC Hardware Solutions</a></li>
                          <li>• Tutorials: <a href="https://www.youtube.com/playlist?list=PLnLbWFZdPSbKk65dt_e0NJyHlEA7zLlo" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SeedSigner Playlist</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Setup Steps</h4>
                        <ol className="space-y-1 text-sm text-stone-600 list-decimal list-inside">
                          <li>Download latest firmware from seedsigner.com</li>
                          <li>Flash to microSD via USB stick</li>
                          <li>Generate new seed or import existing 12/24 words</li>
                          <li>Write seed down on paper/metal backup</li>
                          <li>Use BIP-85 for family wallets (record index numbers)</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Coldcard */}
                  <div className="bg-white rounded-lg p-6 border border-stone-200">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-4">2. Coldcard (Mk4 or Q)</h3>
                    <p className="text-stone-600 mb-4">Signs Bitcoin transactions from being loaded, SD card, or QR code.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Resources</h4>
                        <ul className="space-y-1 text-sm text-stone-600">
                          <li>• Store: <a href="https://coldcard.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">coldcard.com</a></li>
                          <li>• Tutorials: <a href="https://www.youtube.com/playlist?list=PLnLbWFZdPSbJFo0nQ0DVR4udq_WFijilM" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Coldcard Playlist</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Setup Steps</h4>
                        <ol className="space-y-1 text-sm text-stone-600 list-decimal list-inside">
                          <li>Power on Coldcard</li>
                          <li>Set 4-digit PIN + confirm anti-phishing phrase</li>
                          <li>Initialize new 24-word seed or import BIP-39 words</li>
                          <li>Export xpub/descriptor to microSD or QR code</li>
                          <li>Use Sparrow Wallet for watch-only setup</li>
                        </ol>
                        <p className="text-xs text-amber-700 mt-2">⚠️ If importing from SD card, you need an extra 12-word password!</p>
                      </div>
                    </div>
                  </div>

                  {/* Sparrow Wallet */}
                  <div className="bg-white rounded-lg p-6 border border-stone-200">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-4">3. Sparrow Wallet (Desktop)</h3>
                    <p className="text-stone-600 mb-4">Application for air-gapped devices to sign transactions and track wallets.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Resources</h4>
                        <ul className="space-y-1 text-sm text-stone-600">
                          <li>• Download: <a href="https://sparrowwallet.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">sparrowwallet.com</a></li>
                          <li>• Tutorials: <a href="https://www.youtube.com/playlist?list=PLnLbWFZdPSbLHIGb8stnl1qno4VJlIfPg" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Sparrow Playlist</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Setup Steps</h4>
                        <ol className="space-y-1 text-sm text-stone-600 list-decimal list-inside">
                          <li>Install Sparrow on your computer</li>
                          <li>Settings → Server → set to Electrum over Tor</li>
                          <li>Host: toraddress.onion, Port: 50001</li>
                          <li>Create watch-only wallets from xpubs</li>
                          <li>Use Taproot addresses (bc1p...) for new deposits</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Ledger Live */}
                  <div className="bg-white rounded-lg p-6 border border-stone-200">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-4">4. Ledger Live (Desktop)</h3>
                    <p className="text-stone-600 mb-4">Signs all types of crypto transactions and DeFi interactions.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Resources</h4>
                        <ul className="space-y-1 text-sm text-stone-600">
                          <li>• Download: <a href="https://www.ledger.com/ledger-live" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ledger.com/ledger-live</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Setup Steps</h4>
                        <ol className="space-y-1 text-sm text-stone-600 list-decimal list-inside">
                          <li>Install Ledger Live and create profile</li>
                          <li>Connect Ledger device, unlock with PIN</li>
                          <li>Install apps: BTC, ETH, XRP (and others you use)</li>
                          <li>Use with Rabby or Sparrow as needed</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Rabby Wallet */}
                  <div className="bg-white rounded-lg p-6 border border-stone-200">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-4">5. Rabby Wallet (Browser)</h3>
                    <p className="text-stone-600 mb-4">Secure wallet with features that connect to Ledger for easier DeFi interactions.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Resources</h4>
                        <ul className="space-y-1 text-sm text-stone-600">
                          <li>• Download: <a href="https://rabby.io/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rabby.io</a> (use Brave for privacy)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Setup Steps</h4>
                        <ol className="space-y-1 text-sm text-stone-600 list-decimal list-inside">
                          <li>Install Rabby extension in Brave</li>
                          <li>Create two profiles:</li>
                          <li className="ml-4">• my-DeFi Cold → connect Ledger hardware wallet</li>
                          <li className="ml-4">• my-Hot Wallet → software EOA (daily DeFi & spending)</li>
                          <li>Ensure Base network is used for both profiles</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bitcoin Paper/Hardware Wallet */}
              <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Bitcoin Paper/Hardware Wallet (Cold)</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Purpose: Generational, set-and-forget Bitcoin storage with maximum security.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Setup & Storage</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Choose a signer: SeedSigner or Coldcard (Mk4/Q)</li>
                      <li>Create/Import seed:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• SeedSigner: flash from seedsigner.com → generate new seed or import 12/24 words</li>
                          <li>• Coldcard: power on offline → "New Wallet" or import 24 words</li>
                        </ul>
                      </li>
                      <li>Backups: Write 24 words on metal/paper. Store duplicate copies in separate safes. Never photograph seeds.</li>
                      <li>(Optional) BIP-85 plan: From master key, derive child wallets by index. Record which index belongs to which person/purpose through SeedSigner. Ensure BIP-85 is enabled in advanced settings.</li>
                      <li>Connect to watch-only wallet: Export xpub/descriptor to Sparrow for balance viewing without exposing seed. Use Taproot as your Bitcoin script.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Sparrow Wallet (Watch-only + PSBT)</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Download Sparrow: sparrowwallet.com. Keep it updated.</li>
                      <li>Server settings: Settings → Server → Electrum over Tor.
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• Host: your electrum server .onion address</li>
                          <li>• Port: 50001</li>
                        </ul>
                      </li>
                      <li>Create wallet: Import xpub/descriptor from your Cold signer. Use Taproot (addresses start with bc1p...).</li>
                      <li>Verify fingerprint: Sparrow's wallet fingerprint should match the device/paper fingerprint before using.</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Receive Bitcoin (Cold)</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Open wallet in Sparrow → Addresses tab</li>
                      <li>Copy the first unused bc1p... address</li>
                      <li>Verify address on device (Coldcard: Address Explorer) and in Sparrow (match first/last 4 chars)</li>
                      <li>From your exchange (e.g., Coinbase), withdraw BTC on Bitcoin mainnet to that address</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Send Bitcoin (via PSBT)</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Build PSBT: Click Send → paste recipient address → set amount/fee → Finalize PSBT</li>
                      <li>Move PSBT to signer:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• Coldcard: save to microSD, insert into Coldcard. Or scan PSBT QR code</li>
                          <li>• SeedSigner: scan Sparrow's PSBT QR on the device</li>
                        </ul>
                      </li>
                      <li>Sign offline: On device, review transaction and sign PSBT</li>
                      <li>Return signed PSBT: Import in Sparrow or scan QR code</li>
                      <li>Broadcast: Sparrow → Broadcast Transaction. Save the TXID</li>
                      <li>Verify: Check confirmation on block explorer (e.g., mempool.space)</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* DeFi Cold & Hot Wallets */}
              <section className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">DeFi Cold & Hot Wallets (Base Network)</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-blue-800 font-semibold">🌐 General Rule: Use Base (BASE CHAIN) - a layer 2 network on Ethereum for all EVM activity. Always confirm your wallet address (starts with 0x…) matches across dApps and explorers before transacting.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Recommended dApps on Base</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-stone-700">Morpho</h4>
                        <p className="text-sm text-stone-600">Borrow against assets at optimized rates (complex, more optimal rates)</p>
                        <a href="https://app.morpho.org/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">app.morpho.org</a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700">Moonwell</h4>
                        <p className="text-sm text-stone-600">Lending/borrowing powered by Morpho with AI agents functionality</p>
                        <a href="https://moonwell.fi/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">moonwell.fi</a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700">Aave</h4>
                        <p className="text-sm text-stone-600">Lend and borrow assets (easy to manage, standard rates)</p>
                        <a href="https://app.aave.com/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">app.aave.com</a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700">Aerodrome</h4>
                        <p className="text-sm text-stone-600">Swap tokens and provide liquidity</p>
                        <a href="https://aerodrome.finance/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">aerodrome.finance</a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-700">Uniswap</h4>
                        <p className="text-sm text-stone-600">Swap tokens easily on Base</p>
                        <a href="https://app.uniswap.org/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">app.uniswap.org</a>
                      </div>
                    </div>
                    <p className="text-xs text-stone-500 mt-3">Use <a href="https://defillama.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DefiLlama</a> to find the best protocols on-chain.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Top DeFi Sectors</h3>
                    <ul className="space-y-1 text-sm text-stone-700">
                      <li>• Decentralized Exchanges (DEXs)</li>
                      <li>• Lending & Borrowing</li>
                      <li>• Perpetual Futures, Derivatives & Orderbook DEXs</li>
                      <li>• Liquid Staking & LSDfi</li>
                      <li>• Real-World Assets (RWA) & On-Chain Credit</li>
                      <li>• Yield Aggregators & Vaults</li>
                      <li>• Insurance & Risk Protocols</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Sending From Exchange to Wallet</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Copy wallet address (USDC, cbBTC) as 0x…w39 or basename (nick.base.eth)</li>
                      <li>On Coinbase: press send → copy address → select token → select network (Base) → submit amount → review transaction</li>
                      <li>Once sent, it should arrive quickly into your wallet</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Sending From Wallet to Exchange</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>On Coinbase: press receive → click asset → select network (Base) → copy address</li>
                      <li>On wallet (Rabby): click send → select token → amount → paste address → review transaction</li>
                      <li>Once sent, it should arrive quickly into your wallet</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Cold Wallet (Ledger-backed) */}
              <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Cold Wallet (Ledger-backed)</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Purpose: Larger positions; lending/borrowing with strict risk limits for enhanced security.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Setup</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Initialize Ledger with your DeFi Cold seed</li>
                      <li>On Ledger Live add token accounts (Apps) on "My Ledger" (Bitcoin, Solana, Ethereum, XRP)</li>
                      <li>On accounts add the network (BTC, ETH, SOL), make a name and click what address to use</li>
                      <li>On accounts, you can click send/receive for any asset (always double check the network and token) and see your addresses and amount of tokens</li>
                      <li>You can even stake some assets, or connect to other browser wallets for more functionality like Phantom (on Solana) or Rabby (Ethereum and layer 2s like BASE)</li>
                      <li>In Rabby (Brave), add Ledger account; select Base network. Make sure ledger is plugged in, and you're in the ethereum account on the ledger</li>
                      <li>Keep device offline except when signing</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Standard Lending Flow (AAVE on Base)</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Fund the wallet: Hold USDC or cbBTC in your Ledger account on Base
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• BTC → cbBTC: use Coinbase's official wrap/on-ramp to cbBTC on Base (or verified bridge). Test with small amount first.</li>
                        </ul>
                      </li>
                      <li>Open AAVE: <a href="https://app.aave.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">app.aave.com</a> (go to dashboard, then BASE instance, not ethereum)</li>
                      <li>Connect Ledger via Rabby</li>
                      <li>Deposit collateral: Select asset (e.g., cbBTC or USDC) → Enable/Approve → Supply/Deposit</li>
                      <li>Toggle as Collateral (optional) (if you intend to borrow, allows smart contract to liquidate if under-collateralized)</li>
                      <li>Borrow (optional): Borrow USDC at a conservative LTV (≤ 40%). Target Health Factor ≥ 1.6</li>
                      <li>Confirm & sign on Ledger/Rabby</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Repay / Unwind</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Repay USDC debt → wait for confirmation</li>
                      <li>Untoggle collateral if needed → Withdraw collateral (cbBTC/USDC) back to wallet</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Monitoring</h3>
                    <ul className="space-y-1 text-sm text-stone-700">
                      <li>• Create read-only profiles in <a href="https://app.zerion.io/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Zerion</a>/<a href="https://debank.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DeBank</a></li>
                        <li>• Check Health Factor daily if borrowing; set alert thresholds (HF &lt; 1.5)</li>
                      <li>• Only use official/verified bridges & token addresses</li>
                      <li>• Avoid volatile LTVs; liquidation risk rises quickly during market moves</li>
                      <li>• If cbBTC or other tokens are not supported in a given protocol, do not force deposits; stick to supported assets</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Hot Wallet (Rabby software wallet) */}
              <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Hot Wallet (Rabby software wallet)</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Purpose: Day-to-day swaps, payments, repayments with convenient access.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Setup</h3>
                    <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
                      <li>Create a Hot Wallet in Rabby (software EOA)</li>
                      <li>Network = Base. Keep only a working balance, pretend you're carrying cash</li>
                      <li>(Optional) Enable Account Abstraction tools (EIP-4337/7702) for batching & gas sponsorship</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Daily Use (Examples)</h3>
                    <ul className="space-y-1 text-sm text-stone-700">
                      <li>• Top up USDC → repay borrow on AAVE</li>
                      <li>• Send USDC to Friends or Family</li>
                      <li>• Swap small amounts on Aerodrome/Uniswap (Base) → send to DeFi Cold if needed</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-lg p-4 border border-emerald-200">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Hygiene</h3>
                  <ul className="space-y-1 text-sm text-stone-700">
                    <li>• Always revoke approvals (Rabby → Approval Manager)</li>
                    <li>• Maintain enough ETH/SOL for a gas buffer (e.g., $20–$50 worth)</li>
                    <li>• Never go on random sites, or never re-put your keys on your computer in browser, if it asks you while you're on a website it's a scam</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Download link for original PDF */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="text-center">
                <a
                  href="/Crypto-Plan.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Original PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPlan;
