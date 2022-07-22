from django.conf import settings
from opentok import OpenTok, Roles, MediaModes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import BaseParser

class Token(APIView):

	def get(self, request):
		opentok_sdk = OpenTok(settings.VONAGE_API_KEY, settings.VONAGE_API_SECRET)
		role = self.request.query_params.get('role')
		session_id = self.request.query_params.get('session')
		
		if not session_id or session_id in ['undefined', 'null']:
			session = opentok_sdk.create_session(media_mode=MediaModes.routed)
			session_id = session.session_id

		if role == 'moderator':
			role = Roles.moderator
		elif role == 'subscriber':
			role = Roles.subscriber
		else:
			role = Roles.publisher

		token = opentok_sdk.generate_token(session_id, role)
		response_data = {
			'apiKey': settings.VONAGE_API_KEY,
			'token': token,
			'session': session_id,
		}
		return Response(response_data, status=201, content_type="application/json")
