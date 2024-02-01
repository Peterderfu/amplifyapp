from datetime import datetime
from . import saseApi

class serviceSetup:
	"""serviceSetup class"""

	def checkTokenStillValid(self):
		"""
		Checks to see if the token is still valid. 
		Returns true is still in 15minute window. 
		Returns false if not.
		"""
		rightNow = datetime.now()
		tokenValid = bool(rightNow < self.prismaAccessObject.saseToken['expiresOn'])
		return tokenValid

	def paServiceConnectionsListServiceConnections(self, __folder="Service Connections"):
		"""List all service connections that are defined."""
		if self.checkTokenStillValid():
			paServiceConnection = saseApi.saseApi(self.prismaAccessObject.serviceConnectionsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paServiceConnection.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paServiceConnectionsCreateServiceConnection(self, __serviceConnectionObject, __folder="Service Connections"):
		"""Create Service Connection."""
		if self.checkTokenStillValid():
			paServiceConnection = saseApi.saseApi(self.prismaAccessObject.serviceConnectionsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paServiceConnection.paCreate(__serviceConnectionObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paServiceConnectionsDeleteServiceConnection(self, __serviceConnectionObject, __folder="Service Connections"):
		"""Delete service connection."""
		if self.checkTokenStillValid():
			paServiceConnection = saseApi.saseApi(self.prismaAccessObject.serviceConnectionsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paServiceConnection.paDelete(__serviceConnectionObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paServiceConnectionsEditServiceConnection(self, __serviceConnectionObject, __folder="Service Connections"):
		"""Edit Service Connection"""
		if self.checkTokenStillValid():
			paServiceConnection = saseApi.saseApi(self.prismaAccessObject.serviceConnectionsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paServiceConnection.paEdit(__serviceConnectionObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecTunnelsListIpsecTunnels(self, __folder="Service Connections"):
		"""List all IPSec Tunnels that are defined."""
		if self.checkTokenStillValid():
			paIpsecTunnels = saseApi.saseApi(self.prismaAccessObject.ipsecTunnelsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecTunnels.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecTunnelsCreateIpsecTunnel(self, __ipsecTunnelObject, __folder="Service Connections"):
		"""Create IPSec Tunnels"""
		if self.checkTokenStillValid():
			paIpsecTunnels = saseApi.saseApi(self.prismaAccessObject.ipsecTunnelsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecTunnels.paCreate(__ipsecTunnelObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecTunnelsEditIpsecTunnel(self, __ipsecTunnelObject, __folder="Service Connections"):
		"""Edit IPSec Tunnel"""
		if self.checkTokenStillValid():
			paIpsecTunnels = saseApi.saseApi(self.prismaAccessObject.ipsecTunnelsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecTunnels.paEdit(__ipsecTunnelObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecTunnelsDeleteIpsecTunnel(self, __ipsecTunnelObject, __folder="Service Connections"):
		"""Edit IPSec Tunnel"""
		if self.checkTokenStillValid():
			paIpsecTunnels = saseApi.saseApi(self.prismaAccessObject.ipsecTunnelsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecTunnels.paDelete(__ipsecTunnelObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeGatewaysListIkeGateways(self, __folder="Service Connections"):
		"""
		List all IKE Gateways that are defined.
		Defaults to Service Connections folder.
		"""
		if self.checkTokenStillValid():
			paIkeGateways = saseApi.saseApi(self.prismaAccessObject.ikeGatewaysUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeGateways.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeGatewaysCreateIkeGateway(self, __ikeGatewayObject, __folder="Service Connections"):
		"""
		Create IKE Gateway
		Defaults to Service Connections folder.
		"""
		if self.checkTokenStillValid():
			paIkeGateways = saseApi.saseApi(self.prismaAccessObject.ikeGatewaysUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeGateways.paCreate(__ikeGatewayObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeGatewaysEditIkeGateway(self, __ikeGatewayObject, __folder="Service Connections"):
		"""
		Edit IKE Gateway
		Defaults to Service Connections folder.
		"""
		if self.checkTokenStillValid():
			paIkeGateways = saseApi.saseApi(self.prismaAccessObject.ikeGatewaysUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeGateways.paEdit(__ikeGatewayObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeGatewaysDeleteIkeGateway(self, __ikeGatewayObject, __folder="Service Connections"):
		"""
		Delete IKE Gateway
		Defaults to Service Connections folder.
		"""
		if self.checkTokenStillValid():
			paIkeGateways = saseApi.saseApi(self.prismaAccessObject.ikeGatewaysUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeGateways.paDelete(__ikeGatewayObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeCryptoProfilesListIkeCryptoProfiles(self, __folder="Service Connections"):
		"""List all IKE Crypto Profiles that are defined."""
		if self.checkTokenStillValid():
			paIkeCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ikeCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeCryptoProfiles.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeCryptoProfilesCreate(self, __ikeCryptoProfileObject, __folder="Shared"):
		"""Create an address group object"""
		if self.checkTokenStillValid():
			paIkeCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ikeCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeCryptoProfiles.paCreate(__ikeCryptoProfileObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeCryptoProfilesEdit(self, __ikeCryptoProfileObject, __folder="Shared"):
		if self.checkTokenStillValid():
			paIkeCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ikeCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeCryptoProfiles.paEdit(__ikeCryptoProfileObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIkeCryptoProfilesDelete(self, __ikeCryptoProfileObject, __folder="Shared"):
		if self.checkTokenStillValid():
			paIkeCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ikeCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIkeCryptoProfiles.paDelete(__ikeCryptoProfileObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paRemoteNetworksListRemoteNetworks(self, __folder="Remote Networks"):
		"""List all IKE Crypto Profiles that are defined."""
		if self.checkTokenStillValid():
			paRemoteNetworks = saseApi.saseApi(self.prismaAccessObject.remoteNetworksUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paRemoteNetworks.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paRemoteNetworksCreateRemoteNetwork(self, __remoteNetworksObject, __folder="Remote Networks"):
		"""Create an address group object"""
		if self.checkTokenStillValid():
			paRemoteNetworks = saseApi.saseApi(self.prismaAccessObject.remoteNetworksUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paRemoteNetworks.paCreate(__remoteNetworksObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paRemoteNetworksEditRemoteNetwork(self, __remoteNetworksObject, __folder="Remote Networks"):
		if self.checkTokenStillValid():
			paRemoteNetworks = saseApi.saseApi(self.prismaAccessObject.remoteNetworksUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paRemoteNetworks.paEdit(__remoteNetworksObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paRemoteNetworksDeleteRemoteNetwork(self, __remoteNetworksObject, __folder="Remote Networks"):
		if self.checkTokenStillValid():
			paRemoteNetworks = saseApi.saseApi(self.prismaAccessObject.remoteNetworksUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paRemoteNetworks.paDelete(__remoteNetworksObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paInfrastructureSettingsListInfrastructureSettings(self, __folder="Shared"):
		"""List all Infrastructure Settings that are defined."""
		if self.checkTokenStillValid():
			paInfrastructureSettings = saseApi.saseApi(self.prismaAccessObject.infrastructureSettingsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paInfrastructureSettings.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paInfrastructureSettingsEditInfrastructureSettings(self, __infrastructureSettingsObject, __folder="Shared"):
		"""Edit Infrastructure Settings"""
		if self.checkTokenStillValid():
			paInfrastructureSettings = saseApi.saseApi(self.prismaAccessObject.infrastructureSettingsUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paInfrastructureSettings.paEdit(__infrastructureSettingsObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecCryptoProfilesListIpsecCryptoProfiles(self, __folder="Service Connections"):
		"""List all IKE Crypto Profiles that are defined."""
		if self.checkTokenStillValid():
			paIpsecCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ipsecCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecCryptoProfiles.paList(__folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecCryptoProfilesCreate(self, __ipsecCryptoProfilesObject, __folder="Shared"):
		"""Create an address group object"""
		if self.checkTokenStillValid():
			paIpsecCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ipsecCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecCryptoProfiles.paCreate(__ipsecCryptoProfilesObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecCryptoProfilesEdit(self, __ipsecCryptoProfilesObject, __folder="Shared"):
		if self.checkTokenStillValid():
			paIpsecCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ipsecCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecCryptoProfiles.paEdit(__ipsecCryptoProfilesObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def paIpsecCryptoProfilesDelete(self, __ipsecCryptoProfilesObject, __folder="Shared"):
		if self.checkTokenStillValid():
			paIpsecCryptoProfiles = saseApi.saseApi(self.prismaAccessObject.ipsecCryptoProfilesUri, self.prismaAccessObject.saseToken, self.prismaAccessObject.contentType, self.prismaAccessObject.saseAuthHeaders)
			paIpsecCryptoProfiles.paDelete(__ipsecCryptoProfilesObject, __folder)
		else:
			print("Please request new token and create new prismaAccess object.")

	def __init__(self, __prismaAccessObject):
		"""serviceSetup class initialization"""
		self.prismaAccessObject = __prismaAccessObject