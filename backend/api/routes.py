from typing import Annotated
from fastapi import APIRouter
from fastapi import Depends, Header

from starlette.responses import JSONResponse

from shared_utils.auth import is_authorised_user, get_user_info
from shared_utils.settings import get_settings, get_logger

router = APIRouter()



settings = get_settings()
logger = get_logger(level=settings.LOG_LEVEL)


@router.get("/userinfo")
def user_info(authorization: Annotated[str, Header()]):  # noqa: B008, ARG001
    logger.refresh_context()

    current_user = get_user_info(authorization)
    if not current_user.is_authorised:
        logger.info("User {email} not authorised to access app due to {auth_reason}", email=current_user.email, auth_reason=current_user.auth_reason)
        return JSONResponse(status_code=401, content={"error": f"{current_user.email} not authorised to access this app"})
    
    logger.info("User {email} accessed UserInfo endpoint", email=current_user.email)
    return {"User": f"{current_user.email}"}


@router.get("/")
def read_root(x_amzn_oidc_accesstoken: Annotated[str, Header()]):  # noqa: B008, ARG001
    logger.refresh_context()
    
    if not is_authorised_user(x_amzn_oidc_accesstoken):
        logger.info("User not authorised")
        return JSONResponse(status_code=401, content={"error": "Not authorised to access this app"})
    
    return {"Hello": "World"}


@router.get("/healthcheck")
async def health_check():
    return JSONResponse(status_code=200, content={"status": "ok"})


@router.get("/info")
async def info():
    return {"backend": "FastAPI"}
